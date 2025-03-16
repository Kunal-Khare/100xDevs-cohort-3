const express = require("express");
const app = express();

const PORT = 3000;

//middleware to log the request
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

//route for homepage

app.get("/", (req, res) => {
  res.send("Hey this destination is home page");
});

//route for about page

app.get("/about", (req, res) => {
  res.send("Hey this destination is about page");
});

//error handler

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
