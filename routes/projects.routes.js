import express from 'express'
import * as controller from '../controllers/projects.controllers.js'

const route = express.Router()

route.get('/projects', controller.getProjects)

route.get('/projects/nuevo', controller.createProjectFormPage)
route.post('/projects/nuevo', controller.createProject)

route.get('/projects/:idProject/edit', controller.editProjectForm)
route.post('/projects/:idProject/edit', controller.editProject)

route.get('/projects/:idProject/delete', controller.deleteProjectForm)
route.post('/projects/:idProject/delete', controller.deleteProject)

route.get('/projects/:section', controller.getProjectsBySection)

route.get('/projects/:idProject', controller.getProjectById)

export default route