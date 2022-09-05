const router = require("express").Router();
const { User, Song } = require("../models");

router.get("/", async (req, res) => {
    try {
  const songData = await Song.findAll({ include: [User] });
  const songs = songData.map((song) => song.get({ plain: true }));
  res.render("homepage", { songs });
} catch (err) {
    res.status(500).json(err);
}
});

router.get("/song/:id", async (req, res) => {
  try {
    const songData = await Song.findByPk(req.params.id, { include: [User] });
    if (!songData) {
      res.status(404).json({ message: "No song with this id!" });
      return;
    }
    const song = songData.get({ plain: true });
    res.render("song", song);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/create",(req,res)=>{
  res.render("create",)
})

module.exports=router;