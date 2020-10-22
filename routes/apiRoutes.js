const express = require("express")
var router = express.Router();              

router.get('/', function(req, res) {
    res.json({ message: 'test, test, this is a test' });   
});

module.exports= router;


