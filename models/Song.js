const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init({
   song_name: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true,
         validate: {
            isAlphanumeric: true
         }
    },
   artist: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
           isAlphanumeric: true
        }
   },
   genre: {
       type: DataTypes.STRING,
       validate: {
          isAlphanumeric: true
       }
  }
},{
    sequelize,
});

module.exports=Song;