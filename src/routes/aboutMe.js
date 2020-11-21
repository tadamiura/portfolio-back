const express = require('express')
const { connection } = require('../helper/conf')
const router = express.Router()

router.get('/', (req,res) => {
    const sql =
    `SELECT * 
    FROM about_me`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send('Erreur dans la récupération des informations about_me')
        } else {
            res.send(result)
        }
    })
})

router.get('/links', (req,res) => {
    const sql =
    `SELECT github_profil, linkedin_profil, email 
    FROM about_me`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send('Erreur dans la récupération des informations about_me')
        } else {
            res.send(result)
        }
    })
})

module.exports = router