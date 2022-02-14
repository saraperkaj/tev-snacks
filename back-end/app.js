// DEPENDENCIES

const express = require("express");

// CONFIGURATION
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// ROUTES
app.get("/", (request, response) => {
  response.send("Get Snack'n at Snack-a-log!");
});
// EXPORT
module.exports = app;
