const bcrypt = require("bcrypt-nodejs");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
    var ProfileInfos = sequelize.define("ProfileInfos", {
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
    
    // ProfileInfos.associate = models => {
    //     ProfileInfos.belongsTo(models.Users) 
    //         // foreignKey: 'ownerUuid'
    //     // { foreignKey: 'id'})
    // };
    
    return ProfileInfos;
};
