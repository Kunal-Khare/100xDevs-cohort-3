const express = require("express");
const app = express();

// the way to create dynamic endpoints in express

app.get("/add/:a/:b", function (req, res) {
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);

  res.json({
    result: a + b
  });
});

app.get("/sub/:a/:b", function(req,res){
    let a  = parseInt(req.params.a);
    let b = parseInt(req.params.b);

    res.json({
        result: a - b
    })
});

app.listen(3000);