// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as 
//the regular bcrypt module sometimes causes errors on Windows machines
// var uuidv1 = require("uuid/v1");
const bcrypt = require("bcrypt-nodejs");
//const Profile = require("./profile");

//
// Creating our User model
//Set it as export because we will need it required on the server
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("UsersOld", {
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
      type: DataTypes.STRING,
      required: true,
      validate: {
        len: [8]
      }
    },
  });

  // Users.associate = models => {
  //   Users.hasOne(models.ProfileInfo, 
  //     // {foreignKey: 'ownerUuid'});
  //   )}
  // User.findAll({
  //   include: [{model: model.profile, as: 'profile'}]
  // }).then(function(result) {
  //   console.log(JSON.stringify(result));
  // });

  // Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
    
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

  // Hooks are automatic methods that run during various phases of the 2 Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
    Users.beforeCreate(user => {
        user.password = bcrypt.hashSync(
            user.password, 
            bcrypt.genSaltSync(10), 
            null
        );
        return user;
    });
    return Users;
}