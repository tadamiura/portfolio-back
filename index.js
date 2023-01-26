require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./src/routes/index')
const { port } = require('./src/helper/service')

app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use('/api/about-me', routes.AboutMe)
app.use('/api/projects', routes.Project)
app.use('/api/stacks', routes.Stacks)
app.use('/api/tools', routes.Tools)
app.use('/api/experiences', routes.Experiences)
app.use('/api/certifications', routes.Certifications)

app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad just happened...')
    }
    console.log(`Server is listening on ${port}`)
  })