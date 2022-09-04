const express = require("express");
const router = express.Router();
const {User,Song} = require("../../models");

router.get("/", async (req,res) => {
    try{
        const songData = await Song.findAll({
            include:[User]
        })
        
        res.status(200).json(songData);
    } catch (err) {
       console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})

router.get("/:id", async (req,res) => {
    try{
        const songData = await Song.findByPK(req.params.id, {
            include:[User]
        })
        if (!songData){
            res.status(404).json({msg: "an error occured", err: err})
        }
        res.json(songData)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})

router.post("/", async (req, res) => {
    try {
        const songData = await Song.create(
            {
                song_name: req.body.song_name,
                artist: req.body.artist,
                genre: req.body.genre
              },
        );
        res.status(200).json(songData);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})

router.put("/:id", async (req,res) => {
    try{
        const updatedSong = await Song.update(
            {
                song_name: req.body.song_name,
                artist: req.body.artist,
                genre: req.body.genre
              },
              {
                where: {
                    id: req.params.id
                }
            }
        )

        if (!updatedSong[0]){
            res.status(404).json({msg: "an error occured", err: err})
        }

        res.json(updatedSong);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})

router.delete("/:id", async (req,res) => {
    try{
        const delSong = Song.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!delSong[0]){
            res.status(404).json({msg: "an error occured", err: err})
        }
        res.json(delSong)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})

module.exports = router;