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
     rating: req.body.rating
    })
      .then(function(dbJokes) {
        res.json(dbJokes);
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
    })
      .then(function() {
        res.redirect(307, "/login");
      })
      .catch(function(err) {
        console.log(err)
        res.status(401).json(err);
      });
  });

  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // router.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     res.json({});
  //   } else {
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });
module.exports= router;


