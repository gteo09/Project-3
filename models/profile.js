const bcrypt = require("bcrypt-nodejs");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
    var ProfileInfo = sequelize.define("ProfileInfo", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]   
            }
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        address: {      
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        }    
    });
    
    ProfileInfo.associate = models => {
        ProfileInfo.belongsTo(models.Users);
    }
    return ProfileInfo;
};

  // User.hasOne(ProfileInfo, {foreignKey: 'profileId', as: 'profile'});
//   User.hasOne(ProfileInfo);
