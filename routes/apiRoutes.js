const express = require("express")
var router = express.Router();   
const db = require("../models")           

router.get("/api/posts/", function(req, res) {
    db.Jokes.findAll({})
      .then(function(dbJokes) {
        res.json(dbJokes);
      });
  });

  router.post("/api/submitjoke", function(req, res) {
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
  router.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.Post.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
module.exports= router;


