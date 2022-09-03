const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Person extends Model {}

Person.init({
    name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true,
         validate: {
            isAlphanumeric: true
         }
    }
},{
    sequelize,
});

module.exports=Person;