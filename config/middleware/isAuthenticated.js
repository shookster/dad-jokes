module.exports = function(req, res, next) {
    if (req.jokester) {
      return next();
    }
  
    return res.redirect("/");
  };