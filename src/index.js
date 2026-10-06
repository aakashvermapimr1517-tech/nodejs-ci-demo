const http = require("http");

function getMessage() {
    return "Welcome to AWS Continuous Deployment";
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(getMessage());
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});

module.exports = { getMessage };