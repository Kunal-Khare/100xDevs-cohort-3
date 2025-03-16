const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.writeHead(200);
    res.end("<h1> welcome to my life </h1>");
  } else if (req.url === "/about") {
    res.writeHead(200);
    res.end("About Page : Dexter will kill you");
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
