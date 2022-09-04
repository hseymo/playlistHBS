const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    name: {
         type: DataTypes.STRING,
         allowNull:false,
    }
},{
    sequelize,
});

module.exports=User;