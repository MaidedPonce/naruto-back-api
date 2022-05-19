const express = require("express");
const app = express();
const port = 3000;
const data = require("./data")

app.use('/static', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send("holi")
})

app.get("/home", (req, res) => {
    res.json({
        name: "Personaje",
        clan: "Clan de personajes"
    })
})

app.get("/personajes", (req, res) => {

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

app.get("/personajes/filter", (req, res) => {
    const personajes = []
    const { size } = req.query;
    const limit = size || 5

    for (let character = 0; character < data.length; character++) {
        for (let index = 0; index < limit; index++) {
            personajes.push({
                name: data[character].name,
                clan: data[character].clan,
                image: data[character].image
            })
        }
        res.json(personajes)
    }

})

app.get("/personajes/:id", (req, res) => {
    // const id = req.params.id;

    const { id } = req.params;

    res.json({
        id,
        name: "Personaje 1",
        clan: "clan de personaje"
    })
})

app.get("/clanes/:idClan/personajes/", (req, res) => {
    // const id = req.params.id;

    const { idClan, id } = req.params;

    res.json({
        id,
        idClan
    })
})


app.listen(port, () => {
    console.log("holi")
})