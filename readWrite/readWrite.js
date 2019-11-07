let fs = require("fs");
let navn = require("./data.json");

console.log(navn.name);

fs.readFile("./data.json", "utf-8", (err, data) => {
    var data = JSON.parse(data);
    console.log(data.name);
})