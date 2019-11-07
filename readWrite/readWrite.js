let fs = require("fs");

fs.readFile("./data.json", (err, data) => {
    console.log(data);
})