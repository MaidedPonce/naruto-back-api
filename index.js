const express = require("express");
const routerApi = require("./routes")
const app = express();
const port = 3000;

app.use(express.json());


app.use('/static', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send("holi")
})

routerApi(app)

app.listen(port, () => {
    console.log("holi")
})