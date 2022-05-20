const express = require("express")
const router = express.Router()
const data = require("../data")

router.get("/", (req, res) => {
    const characters = []

    for (let character = 0; character < data.length; character++) {
            characters.push({
                name: data[character].name,
                clan: data[character].clan,
                habilidad: data[character].habilidad
            })
        }
        res.json(characters)
})


router.get("/limit", (req, res) => {

    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit, 
            offset 
        })
    } else {
        res.send("No hay parámetros")
    }

})

router.get("/filter", (req, res) => {
    const characters = []
    const { size } = req.query;
    const limit = size || 5

    for (let character = 0; character < data.length; character++) {
        for (let index = 0; index < limit; index++) {
            characters.push({
                name: data[character].name,
                clan: data[character].clan,
                habilidad: data[character].habilidad
            })
        }
        res.json(characters)
    }

})

router.get("/:id", (req, res) => {
    // const id = req.params.id;

    const { id } = req.params;

    res.json({
        id,
        name: "Personaje 1",
        clan: "clan de personaje"
    })
})

router.get("/clanes/:idClan/", (req, res) => {
    // const id = req.params.id;

    const { idClan, id } = req.params;

    res.json({
        id,
        idClan
    })
})


module.exports = router;