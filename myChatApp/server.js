let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let messages = [
    {name: "Audun", message: "E du der?"},
    {name: "Jørund", message: "Jepp"},
]

app.get("/messages", (req, res) => {
    res.send(messages)
})

app.post("/messages", (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
})

let server = app.listen(3000, () => {
    console.log("Serveren lytter til port", server.address().port)
});