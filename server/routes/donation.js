const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/auth");


const User = require("../models/User");
const Donation = require("../models/Donation");

// Get donations
router.get('/', async(_, res) => {
  try {
    const donations = await Donation.find().sort({ donationCount: -1 });
    res.json(donations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

// Post donation
router.post(
  "/",
  [
    body("amount", "Amount donated is required.").not().isEmpty(),
    body("donator", "Donator is required.").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { amount, donator, message, location } = req.body;


      const newDonation = new Donation({
        amount,
        donator,
        message,
        location,
        comment: []
      });

      const donation = await newDonation.save();

      res.json(donation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// Comment on donation post
router.post(
  "/comment/:id",
  [[auth, [body("text", "Please enter your message.").not().isEmpty()]]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        const donation = await Donation.findById(req.params.id);

        const newComment = {
            text: req.body.text,
            user: user.name,
            status: user.status
        }

        console.log(donation)

        donation.comment.unshift(newComment);

        await donation.save();

        res.json(donation);

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }

  }
);

module.exports = router;
