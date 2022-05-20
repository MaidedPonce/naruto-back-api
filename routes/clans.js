const express = require("express")
const router = express.Router()
const data = require("../data")

router.get("/", (req, res) => {
    const characters = []
    for (let index = 0; index < data.length; index++) {
        characters.push({
            clan: data[index].clan
        })
        
    }
    res.json(characters)
})

module.exports = router