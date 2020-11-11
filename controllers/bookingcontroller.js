const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const catchAsync = require('../utils/catchAsync');


exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) The price ID of the subscription the customer is signing up for
  //    this value is passed from your frontend.
  const { priceId } = req.body; 
   console.log(priceId);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.protocol}://${req.get('host')}/canceled.html`,
    line_items: [
      {
        price: priceId, 
        currency: 'usd',
        quantity: 1
      },
    ],
  });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session
  });
});