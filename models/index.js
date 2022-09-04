const User = require("./User");
const Song = require("./Song");

User.hasMany(Song);
Song.belongsTo(User);

// could be many to many; could add in artist and genre seperate from song

module.exports = {
    User,
    Song
}