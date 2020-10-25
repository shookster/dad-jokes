module.exports = function (sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
      rating: {
        type: DataTypes.INTEGER,
      }
      
  },
  {
      
    timestamps: false
  }  
  );
  
    return Rating;
  };