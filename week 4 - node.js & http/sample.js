/*
function calculateSum(n){
    let ans = 0;
    for(let i = 1; i<=n; i++){
        ans = ans+i;
    } 
    return ans;

}

let ans = calculateSum(10);
console.log(ans);
*/

// ---------------------express--------------------------


const express = require("express");

function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

const app = express();

app.get("/", function (req, res) {
  const n = req.query.n;
  const sum = calculateSum(n);
  res.send(sum.toString());
});

app.listen(3000);



/*
const express = require("express");

const app = express();

app.get("/", function(req , res){
    res.send("Hi there");
})

app.listen(3000);
*/