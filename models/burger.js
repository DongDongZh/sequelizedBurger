module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    // Giving the Author model a name of type STRING
    burger_name: DataTypes.STRING,
    devoured:{type: DataTypes.BOOLEAN, defaultValue: false}
  });

  return burger;
};
