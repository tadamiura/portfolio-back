const express = require('express')
const { connection } = require('../helper/conf')
const router = express.Router()

router.get('/', (req, res) => {
    const sql = `SELECT * FROM certification`
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Erreur dans la récupération des expérience')
        } else {
            res.send(result)
        }
    })
})

module.exports = router;