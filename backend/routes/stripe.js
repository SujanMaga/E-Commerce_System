const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51N1Bo5An34WkQpYJ56F3yK7I0HMZpnCpGrbguBOadaZTwd08JVacWwpx5KTxbSlGhBM4LSkBxv6B1hN2NqcFW8d900p1phX3N0"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
