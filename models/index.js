const Person = require("./Person");
const Song = require("./Song");

Person.hasMany(Song);
Song.belongsTo(Person);

// could be many to many; could add in artist and genre seperate from song

module.exports = {
    Person,
    Song
}