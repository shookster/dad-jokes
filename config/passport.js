var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");


passport.use(new LocalStrategy(

  {
    usernameField: "email"
  },
  function(email, password, done) {
    
    db.Jokesters.findOne({
      where: {
        email: email
      }
    }).then(function(dbJokesters) {
      
      if (!dbJokesters) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      
      else if (!dbJokesters.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
    
      return done(null, dbUser);
    });
  }
));

passport.serializeJokester(function(user, cb) {
  cb(null, user);
});

passport.deserializeJokester(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;