import http from "http";
import os from "os";
const port = 4000;
let body = "";
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/" && req.method == "GET") {
    res.end("<h1>Home Page </h1>");
  } else if (url == "/about" && req.method == "GET") {
    res.end("About page");
  } else if (url == "/contact" && req.method == "GET") {
    res.end("Contact Page ");
  } else if (url == "/system" && req.method == "GET") {
    res.end("System info");
  } else if (url == "/senddata" && req.method == "POST") {
    
    req.on("data", (chunk) => {
      body = body + chunk;
    });
    req.on("end", () => {
      res.statusCode = 201;
      console.log(body, "datasend");
      res.end(body + "<h1>Send data</h1>");
    });
  } else if (url == "/viewdata" && req.method == "GET") {
    res.end("view data");
  } else {
    res.statuscode = 404;
    res.end("Error Page");
  }
  res.end();
});
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
