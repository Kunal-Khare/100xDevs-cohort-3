const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "kunalkhare@gmail.com";
const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  user.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are signed up",
  });

  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
        password: password,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }

  console.log(users);
});


app.listen(3000);
