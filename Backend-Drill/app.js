const fs = require('fs');

fs.readFile('msg.txt', 'utf8', (err, data) =>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})

const add = require('./math.js');

console.log(add(34,35));