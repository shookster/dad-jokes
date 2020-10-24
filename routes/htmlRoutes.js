const { Router, response } = require("express");
const express = require("express");
const db = require("../models");
var router = express.Router(); 


router.get("/", function (req, res) {
  console.log("routecheck for index")
  // res.render("index");
  db.Jokes.findAll().then((jokes) => {
    res.render("index", {
      msg: "Jokes!",
      jokes: jokes
    });
  }).catch((err) => console.log(err));
})

router.get("/submitjoke", function(req,res){
  res.render("submitJoke");
})

router.get("/signup", function(req,res){
  res.render("signup");
})

router.get("/login", function(req,res){
  res.render("login");
})

    module.exports= router;