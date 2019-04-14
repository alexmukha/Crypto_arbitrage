
module.exports = function(sequelize, DataTypes) {
  console.log("Model created!!!!!!!!!!!!!!!!!!!!!!!")
  var Users = sequelize.define("users", {

    login: DataTypes.STRING,
    password: DataTypes.STRING,
    coin1: DataTypes.STRING,
    coin2: DataTypes.STRING,
    coin3: DataTypes.STRING,
    coin4: DataTypes.STRING,
    coin5: DataTypes.STRING
  }, 
  {timestamps:false});
  console.log(Users);

  return Users;
};
