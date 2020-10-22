module.exports = function (sequelize, DataTypes) {
  var Joke = sequelize.define("Joke", {
    title: DataTypes.STRING,
    fulljoke: DataTypes.TEXT,
    punchline: DataTypes.TEXT,
    genre: DataTypes.STRING,
    rating: DataTypes.DECIMAL
  });
  return Joke;
};
