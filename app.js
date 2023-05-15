import express from 'express'
import ProjectRoute from './routes/projects.routes.js'
import ProjectRouteApi from './api/routes/projects.api.routes.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json())

app.use('/', express.static('public'))

app.use('/', ProjectRoute)
app.use('/api', ProjectRouteApi)

app.listen(2222, function () {
    console.log('Servidor levantado a la perfección en http://localhost:2222')
})