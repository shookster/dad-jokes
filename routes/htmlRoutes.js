const { Router, response } = require("express");
const express = require("express");
const db = require("../models");
var router = express.Router(); 


router.get("/", function(req,res){
 res.render("index");
 db.Jokes.findAll().then((jokes) => {
    res.render("index", jokes);
 });
})

router.get("/submitjoke", function(req,res){
  res.render("submitJoke");
})

    module.exports= router;