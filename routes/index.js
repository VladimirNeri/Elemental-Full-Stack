const express = require('express');
const router = express.Router();
const subcontroller = require('../controllers/subcontroller');

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const authConfig = require('./../auth_config.json');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256'],
});

// Subscribe to Newsletter
router.post('/sub', subcontroller.create);

router.get('/posts', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

module.exports = router;
