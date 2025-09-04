// const catMe = require('cat-me');

// console.log(catMe())

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        res.end("The about page")
    }

    if(req.url == "/profile"){
        res.end("The profile page")
    }

    if(req.url =="/"){
        res.end("The home page");
    }
})

server.listen(3000);
