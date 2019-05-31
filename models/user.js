// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
// var uuidv1 = require("uuid/v1");
const bcrypt = require("bcrypt-nodejs");
//const Profile = require("./profile");
const Farm = require("./farm") 
//
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // uuid: {
    //   primaryKey: true,
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1
    // },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 30]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.STRING(255),
      required: true,
      // validate: {
      //   len: [8]
      // }
    },
    description:{
      type: DataTypes.STRING,
      required: true,
    },
    phoneNumber:{
      type: DataTypes.STRING,
      required: true
    },
    address:{
      type: DataTypes.STRING,
      required: true
    },
    website:{
      type: DataTypes.STRING,
      required: true
    }

  });
    return Users;
}