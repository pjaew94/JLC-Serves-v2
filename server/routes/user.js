const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('config');

const User = require('../models/User');


// Register user
router.post('/', [
    body("name", 'Please enter your name.').not().isEmpty(),
    body("email", "Please enter a valid email.").isEmail(),
    body("password", "Password length must be at least 6 characters.").isLength({
      min: 6,
    }),
    body('status', 'Please enter the users status').not().isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, status } = req.body;

    try {
        let user = await User.findOne({ email });
  
        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "User already exists" }] });
        }
  
        user = new User({
          name,
          email,
          password,
          status
        });
  
        const salt = await bcrypt.genSalt(10);
  
        user.password = await bcrypt.hash(password, salt);
  
        await user.save();
  
        const payload = {
            user: {
                id: user.id
            }
        }
  
        jwt.sign(
            payload,
            config.get('JWT_SECRET'),
            { expiresIn: 36000 },
            (err, token) => {
                if(err) throw err
                res.json({ token })
            }
          )
  
  
      } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error')
      }
});


// Login user
// Login
router.post(
    "/login",
    [
      body("email", "Please enter a valid email").not().isEmpty(),
      body("password", "Please enter your password").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
  
        const { email, password } = req.body;
        
      try {
  
        const user = await User.findOne({ email });
  
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }
  
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          jwtSecret,
          { expiresIn: 36000 },
          (err, token) => {
            if (err) throw err;
            res.send({token});
          }
        );
      } catch (err) {
          console.error(err.message)
          res.status(500).send('Server error')
      }
    }
  );

module.exports = router;