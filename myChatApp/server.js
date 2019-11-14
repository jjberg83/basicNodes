let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongoose = require("mongoose");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let dbUrl = "mongodb+srv://user:user@learning-node-jjberg-ibhjs.mongodb.net/test?retryWrites=true&w=majority";

let Message = mongoose.model("Message", {
    name: String,
    message: String
});

app.get("/messages", (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.post("/messages", (req, res) => {
    let message = new Message(req.body);

    message.save((err) => {
        if (err)
            sendStatus(500)

        io.emit("message", req.body);
        res.sendStatus(200);
    })
})

io.on("connection", (socket) => {
    console.log("a user connected");
})

mongoose.connect(dbUrl, { useUnifiedTopology: true }, (err) => {
    console.log("Mongo db connection", err);
})

let server = http.listen(3000, () => {
    console.log("Serveren lytter til port", server.address().port)
});