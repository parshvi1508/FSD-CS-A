import http from "http";
import os from "os";
const port = 4001;
let body = "";
const data = [];
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/" && req.method == "GET") {
    res.end("<h1>Home Page </h1>");
  } else if (url == "/about" && req.method == "GET") {
    res.end("About page");
  } else if (url == "/contact" && req.method == "GET") {
    res.end("Contact Page ");
  } else if (url == "/system" && req.method == "GET") {
    const sysdata = {
      platform: os.platform(),
      arch: os.arch(),
      cpu: os.cpus().length,
      totalmem: (os.totalmem() / 1024 ** 3).toFixed(2)+"GB",
      freemem: (os.freemem() / 1024 ** 3).toFixed(2)+"GB",
    };
    res.setHeader("content-Type", "application/json");
    res.end(JSON.stringify(sysdata));
  } else if (url == "/senddata" && req.method == "POST") {
    req.on("data", (chunk) => {
      body = body + chunk;
    });
    req.on("end", () => {
      res.statusCode = 201;
      console.log(body, "datasend");
      data.push(body);
      res.end(JSON.stringify(data));
    });
  } else if (url == "/viewdata" && req.method == "GET") {
    res.end(body);
  } else {
    res.statusCode = 404;
    res.end("Error Page");
  }
});
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});