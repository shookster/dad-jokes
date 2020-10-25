module.exports = function (sequelize, DataTypes) {
    var Ratings = sequelize.define("Ratings", {
      rating: {
        type: DataTypes.INTEGER,
      }
      
  },
  {
      
    timestamps: false
  }  
  );
  
    return Ratings;
  };