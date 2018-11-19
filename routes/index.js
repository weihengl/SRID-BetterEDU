var express = require('express');
var router = express.Router();

/* GET home page. */

router.use('/game',require("./game"));


module.exports = router;
