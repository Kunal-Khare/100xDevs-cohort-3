const express = require("express");
const app = express();
let requestCount = 0;


function requestIncreaser(){
    requestCount = requestCount +1;
    console.log("The number of request:" + requestCount);
}



 app.get("/sum", function(req,res){
    requestIncreaser(req,res);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b
    })
 });


 app.get("/sub", function(req,res){
    requestIncreaser(req,res);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a-b
    })
 });

app.listen(3000);