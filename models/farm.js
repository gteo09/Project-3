const User = require("./user")

module.exports = (sequelize, DataTypes) => {
    var Farms = sequelize.define("oldFarms", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]   
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {      
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        products: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
    });
    
    return Farms;
};