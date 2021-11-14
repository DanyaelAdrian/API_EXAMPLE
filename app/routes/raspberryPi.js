const chalk = require("chalk");
const exPress = require("express");
const router = exPress.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//RESt API CRUD
router.get("/raspberryPi", function(req, res) { //or function(request, response)//
    console.log(res);
    res.json("Led On!");
    console.log(chalk.red("Led On!"));
});

router.get("/home", function(req, res) { //or function(request, response)//
    console.log(res);
    res.json("Welcome Home!");
    console.log(chalk.red("Welcome Home!"));
});

router.post("/raspberryPi", (req, res) => {
    res.send(req.body);

    const {speed, ledIntensity} = req.body; //Se convierten en objetos//

    console.log(speed, ledIntensity);
    console.log(req.body);
})

module.exports = router;
