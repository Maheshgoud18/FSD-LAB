const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write("<h1>HELLO WELCOME TO NODE.JS......!</h1>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running at port 3000");
});
