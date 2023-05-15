import { Router } from 'express'
import * as controller from '../controllers/projects.api.controllers.js'

const route = Router()

route.get('/projects', controller.getProjects)
route.post('/projects', controller.createProject)
route.put('/projects/:idProject', controller.replaceProject)
route.patch('/projects/:idProject', controller.updateProject)
route.delete('/projects/:idProject', controller.deleteProject)
route.get('/projects/:section', controller.getProjectsBySection)
route.get('/projects/:idProject', controller.getProjectById)




export default route