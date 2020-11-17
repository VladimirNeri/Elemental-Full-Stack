const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const bodyParser = require('body-parser');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

// 3) ROUTES
app.use('/api', routes);

app.get("/api/public-key", (req, res) => {
  res.send({ publicKey: process.env.STRIPE_PUBLISHABLE_KEY });
});
app.get("/api/product-details", (req, res) => {
  let data = getProductDetails();
  res.send(data);
});

app.post("/api/create-payment-intent", async (req, res) => {
  const body = req.body;
  const productDetails = getProductDetails();

  const options = {
    ...body,
    amount: productDetails.amount,
    currency: productDetails.currency
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create(options);
    res.json(paymentIntent);
  } catch (err) {
    res.json(err);
  }
});

let getProductDetails = () => {
  return { currency: "USD", amount: 2000 };
};

// Webhook handler for asynchronous events.
app.post('/api/webhook', bodyParser.raw({type: 'application/json'}), async (req, res) => {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  if (webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️ Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the request body.
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === "payment_intent.succeeded") {
    // Fulfill any orders, e-mail receipts, etc
    console.log("💰 Payment received!");
  }

  if (eventType === "payment_intent.payment_failed") {
    // Notify the customer that their order was not fulfilled
    console.log("❌ Payment failed.");
  }

  res.sendStatus(200);
});

// app.use('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

module.exports = app;


