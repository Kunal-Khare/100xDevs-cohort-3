/*
const map = new Map();
map.set('name', 'Kunal');
map.set('age', 22);

const firstName = map.get('name');
console.log( firstName );
*/

/*
function callback(){

    console.log("5 secs have passed ");

}
setTimeoutPromisified(5000).then(callback);
*/

function random(){

}

let p = new Date();
console.log(p) 

function random1(resolve){ // resolve is also a function 
    resolve(); 
}
let p1 = new Promise(random1); // supposed to return u something eventually 

// using the eventual value returned by the promise
function callback(){
    console.log("promise succeded")
}

p1.then(callback);