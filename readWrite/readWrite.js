let fs = require("fs");
let navn = require("./data.json");

console.log(navn);

fs.readFile("./data.json", "utf-8", (err, data) => {
    console.log(data);
})