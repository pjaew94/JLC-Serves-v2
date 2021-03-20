const express = require("express");
const app = express();
const path = require("path");

const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/user"));
app.use("/api/donation", require("./routes/donation"));
app.use("/api/stripe", require("./routes/stripe"));

// // Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  