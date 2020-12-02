const express = require('express')
const { connection } = require('../helper/conf')
const router = express.Router()

router.get('/', (req,res) => {
    const sql =
    `SELECT * 
    FROM project`
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send('Erreur dans la récupération des informations project')
        } else {
            res.send(result)
        }
    })
})

// Get project by ID for project apge in front
router.get('/:id', (req, res) => {
    const idProject = req.params.id
    const sql = 'SELECT * FROM project WHERE id = ?'
    connection.query(sql, [idProject], (err, result) => {
      if (err) {
        res.status(500).send('Erreur dans la récupération du projet')
      } else {
        res.status(200).send(result[0])
      }
    })
  })

module.exports = router;