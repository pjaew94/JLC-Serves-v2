const express = require("express");
const router = express.Router();
const config = require("config");

const stripeKey = config.get("STRIPE_KEY");

const stripe = require("stripe")(stripeKey);

router.post("/create-donation-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
        submit_type: 'donate',
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "JLC Serves Donation",
            },
            unit_amount: req.body.amount
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id, amount: req.body.amount });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
