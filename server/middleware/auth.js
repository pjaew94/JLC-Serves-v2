const jwt = require('jsonwebtoken');
const { config } = require('dotenv');

config({path: __dirname + '../config/.env'});

const jwtSecret= process.env.JWT_SECRET;

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    await jwt.verify(token, jwtSecret, (error, decoded)=>{
      if(error){
        res.status(401).json({ msg: 'Token is not valid' });
      }
      else{
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware')
    res.status(500).json({ msg: 'Server Error' });
  }
};
