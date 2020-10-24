const { Router, response } = require("express");
const express = require("express");
const db = require("../models");
var router = express.Router(); 
var isAuthenticated = require('../config/middleware/isAuthenticated')


router.get("/", function (req, res) {
  console.log("routecheck for index")
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
router.get("/logout", function(req,res){
  res.render("index")
})
// router.get("/login", isAuthenticated, function(req, res) {
//   res.render("index");
// });

    module.exports= router;