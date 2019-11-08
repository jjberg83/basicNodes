 let fs = require("fs");

 let aname = {
     name: "Sam"
 };

 fs.writeFile("moreWrite.js", JSON.stringify(aname), (err) => {
     console.log("Write is finished!");
 });