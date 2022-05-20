const express = require("express")
const charactersRouter = require("./characters")
const clansRouter = require("./clans")

function routerApi(app) {
    const router = express.Router()
    app.use("/naruto", router)

    router.use("/characters", charactersRouter)
    router.use("/clans", clansRouter)
}

module.exports = routerApi;