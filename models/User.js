const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    name: {
         type: DataTypes.STRING,
         allowNull:false,
         validate: {
            isAlphanumeric: true
         }
    }
},{
    sequelize,
});

module.exports=User;