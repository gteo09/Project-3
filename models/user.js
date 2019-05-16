// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcrypt-nodejs");
//
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
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
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [8]
      }
    }
  });
  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
    
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
    User.beforeCreate(user => {
        user.password = bcrypt.hashSync(
            user.password, 
            bcrypt.genSaltSync(10), 
            null
        );
        return user;
    });
    return User;
}