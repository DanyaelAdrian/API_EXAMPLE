const chalk = require("chalk");
const express = require('express');
const myRouters = require("./routes/raspberryPi");


const PORT = 7777;
const URL = "http://localhost";
const app = express();

app.use(myRouters);

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.listen(PORT, () => {
    console.log( chalk.green(`server running at: ${URL}: ${PORT}/`));
})
