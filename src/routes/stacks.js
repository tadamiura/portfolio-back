const express = require('express')
const { connection } = require('../helper/conf')
const router = express.Router()

router.get('/', (req, res) => {
    const sql =
    `SELECT *
    FROM stack`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send('Erreur dans la récupération des informations des stacks')
        } else {
            res.send(result)
        }
    })
})

module.exports = router