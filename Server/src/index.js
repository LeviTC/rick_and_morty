const express = require("express");
const server = express();
const router = require("./routes/index");



const PORT = 3001;

server.use(express.json());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use("/rickandmorty", router);


server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});






// const http = require("http");
// const PORT = 3001;
// const getCharById = require("./controllers/getCharById")

// http.createServer((req, res) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (req.url.includes("/rickandmorty/character")) {
//         let id = parseInt(req.url.split("/").reverse()[0]);

//         getCharById(res, id);
//     }



// }).listen(PORT, "localhost");

// // if (req.url.includes("/rickandmorty/character")) {
// //     let id = req.url.split("/").reverse()[0];
// //     let char = data.find(character => character.id == id);

// //     if (char) {
// //         res.writeHead(200, { "Content-Type": "application/json" });
// //         return res.end(JSON.stringify(char))
// //     } else {
// //         res.writeHead(404., { "Content-Type": "application/json" });
// //         return res.end(JSON.stringify({ error: "character not found" }))
// //     }

// // }