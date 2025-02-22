// Initialize counter to 0
let ctr = 0;

// Define a callback function to log and increment counter
function callback() {
  console.log(ctr);
  ctr = ctr + 1;
}

// Call the callback function every 1 second
setInterval(callback, 1000);