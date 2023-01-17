const express = require('express')
const { connection } = require('../helper/conf')
const router = express.Router()

router.get('/', (req, res) => {
    const sql =
    `SELECT *
    FROM tool`
    let sortedResult = null;
    let development = [];
    let project = [];
    let uxUi = [];
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err.message)
            res.status(500).send('Erreur dans la récupération des informations des tools')
        } else {
            result.forEach(tool => {
                if (tool.category === 'développement') {
                    development.push(tool)
                }
                if (tool.category === 'gestion de projets') {
                    project.push(tool)
                }
                if (tool.category === 'UX/UI') {
                    uxUi.push(tool)
                }
                sortedResult = {
                    'development': development,
                    'project': project,
                    'ux/ui': uxUi,
                }
            })
            res.send(sortedResult)
        }
    })
})

module.exports = router