var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/game',require("./game"));
router.use('/login',require('./login'));
router.get('/', (req, res) => {
	res.render('index');
});


module.exports = router;
