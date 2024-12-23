const express = require("express");
const app = express();
const crypto = require("crypto"); // it is used for generating the random hexadecimal string

//middleware
app.use(express.json());

const users = [];



//it returns a random long string
function generateToken() {
  return crypto.randomBytes(16).toString("hex");
}

/*
// Middleware to authenticate a random token
function authenticateToken() {
  return token = req.headers["authorization"];
  // get token from authentication header

  if (token) {
    return res.sendStatus(401);
  }

  //find the user with the provided token
  const user = users.find(function (user) {
    return user.token == token;
  });

  if (user) {
    return res.sendStatus(403);
  }

  req.user = user;
  next();
}

*/

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    mesaage: "You are signed up",
  });

  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = generateToken();
    user.token = token;
    res.send({
      token,
    });
    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

// "/me" endpoint to get user informations

app.get("/me", function (req, res) {
  const token = req.headers.token;
  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].token == token) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      mesaage: "token inavlid",
    });
  }
});

app.listen(3000);
