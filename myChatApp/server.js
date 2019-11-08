let express = require("express");
let app = express();

app.use(express.static(__dirname));
let server = app.listen(3000, () => {
    console.log("Serveren lytter til port", server.address().port)
});