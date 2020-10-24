const express = require("express")

const handlers = require('./handlers')

const router = express.Router()

router.get('/', (req, res) => {
    const intent = handlers.getIndex()
    res.status(intent.status)
        .json(intent.json)
})

module.exports = router