const sequelize = require("../config/connection")
const {User, Song} = require("../models")

const users = [
    {
        name: "Haley"
    },
    {
        name: "Leah"
    },
    {
        name: "Paige"
    },
    {
        name: "Matt"
    },
    {
        name: "Allie"
    },
    {
        name: "Brandon"
    },
    {
        name: "Christine"
    },
    {
        name: "Doug"
    },
    {
        name: "Eden"
    },
    {
        name: "Frank"
    },
]

const songs = [
    {
        song_name: "Make It Sweet",
        artist: "Old Dominion",
        genre: "Country",
        PersonId: 1
    }, 
    {
        song_name: "This",
        artist: "Darius Rucker",
        genre: "Country",
        PersonId: 2
    }, 
    {
        song_name: "Some Of It",
        artist: "Eric Church",
        genre: "Country",
        PersonId: 2
    }, 
    {
        song_name: "Get Along",
        artist: "Kenny Chesney",
        genre: "Country",
        PersonId: 3
    }, 
    {
        song_name: "Wide Open Spaces",
        artist: "The Chicks",
        genre: "Country",
        PersonId: 5
    }, 
    {
        song_name: "Colder Weather",
        artist: "Zac Brown Band",
        genre: "Country",
        PersonId: 7
    }, 
    {
        song_name: "You Lie",
        artist: "The Band Perry",
        genre: "Country",
        PersonId: 8
    }, 
    {
        song_name: "Somebody Like That",
        artist: "Tenille Arts",
        genre: "Country",
        PersonId: 4
    }, 
    {
        song_name: "Kinfolks",
        artist: "Sam Hunt",
        genre: "Country",
        PersonId: 5
    }, 
    {
        song_name: "Homemade",
        artist: "Jake Owen",
        genre: "Country",
        PersonId: 6
    }, 
]

const feedMe = async() => {
    await sequelize.sync({force:true})
    await User.bulkCreate(users)
    await Song.bulkCreate(songs)
}

feedMe();