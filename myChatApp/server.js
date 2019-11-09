let express = require("express");
let app = express();

app.use(express.static(__dirname));

let messages = [
    {name: "Audun", message: "E du der?"},
    {name: "Jørund", message: "Jepp"},
]

app.get("/messages", (req, res) => {
    res.send(messages)
})


let server = app.listen(3000, () => {
    console.log("Serveren lytter til port", server.address().port)
});