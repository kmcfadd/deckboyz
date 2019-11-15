const express = require("express");
const path = require("path");
const mongoose = require('mongoose')
const routes = require('./routes')
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

mongoose.connect(
  process.env.MONGODB_URI || 
  'mongodb://user1:password1@dbh23.mlab.com:27237/heroku_6t5lff23', 
{ useNewUrlParser: true })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
