const express = require("express");
const router = express.Router();
const { User, Song } = require("../../models");

router.get("/", async (req,res) => {
    try{
        const userData = await User.findAll({
            include:[Song]
        })
        console.log(userData)
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err: err });
    }
})

router.get("/:id", async (req,res) => {
    try{
        const userData = await User.findByPk(req.params.id, {
            include: [Song]
        })
        if (!userData){
            res.status(404).json({msg: "an error occured"})
        } 
        res.json(userData)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err: err });
    }
})

router.post("/", async (req,res) => {
    try{
        const userData = await User.create(
            {
            name: req.body.name,
            });
        res.status(200).json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})

router.put("/:id", async (req,res) => {
    try{
        const updatedUser = await User.update(
            {
                name: req.body.name,
            }, {
                where: {
                    id: req.params.id
                }
            }
        )

        if (!updatedUser[0]){
            res.status(404).json({msg: "an error occured", err: err})
        }

        res.json(updatedUser);

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
    }
})


// need to debug this route - successfully deleting but also catching
router.delete("/:id", async (req,res) => {
    try {
        const delUser = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        console.log(delUser)
        if (!delUser[0]){
            res.status(404).json({msg: "1", err: err})
        }
        res.json(delUser)
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "2", err: err});
    }
})

module.exports = router;
