const express = require("express")
var router = express.Router();   
const db = require("../models")   
const passport = require("../config/passport")        

router.get("/posts/", function(req, res) {
    db.Jokes.findAll({})
      .then(function(dbJokes) {
        res.json(dbJokes);
      });
  });

  router.post("/submitjoke", function(req, res) {
    console.log(req.body);
    db.Jokes.create({
     name: req.body.name,
     punchline: req.body.punchline,
     genre: req.body.genre,
    })
      .then(function() {
        res.redirect("/home");
      }).catch(function(err){
        console.log(err)
      });
  });

  router.post("/login", passport.authenticate("local"), function(req, res) {
    console.log(req.user)
    res.json(req.user);
  });

  router.post("/signup", function(req, res) {
    console.log("testing this ish")
    db.Jokesters.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect("/login");
    }).catch(function(err) {
      res.status(401).json(err);
    });
  });


module.exports= router;


