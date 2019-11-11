let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

let messages = [
    {name: "Audun", message: "E du der?"},
    {name: "Jørund", message: "Jepp"},
]

app.get("/messages", (req, res) => {
    res.send(messages)
})

app.post("/messages", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

let server = app.listen(3000, () => {
    console.log("Serveren lytter til port", server.address().port)
});