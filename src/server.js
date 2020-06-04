const express = require("express");
const server = express();

//configurar pasta pública
server.use(express.static("public"));

//utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

server.get("/", (req, res) => {
    return res.render("index.html");
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

server.get("/search-results", (req, res) => {
    return res.render("search-results.html");
});



//liagar o servidor
server.listen(3000);