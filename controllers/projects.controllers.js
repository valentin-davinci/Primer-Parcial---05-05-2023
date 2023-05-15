import * as service from '../services/projects.services.js'
import * as view from '../views/projects.views.js'


function getProjects(req, res) {
    service.getProjects({ deleted: true })
    .then(function (projects) {
        res.send(view.createProjectListPage(projects))
    })
}

function getProjectsBySection(req, res) {
    let section = req.params.section

    service.getProjectsBySection(section)
    .then(function (projects) {
        if (projects) {
            res.send(view.createProjectListPage(projects))
        }
        else {
            res.send(view.createPage('Error!', '<p>No se pudo encontrar el proyecto :c</p>'))
        }
    })
}


function getProjectById(req, res) {
    let idProject = req.params.idProject

    service.getProjectById(idProject)
    .then(function (project) {
        if (project) {
            res.send(view.createProjectPage(project))
        }
        else {
            res.send(view.createPage('Error!', '<p>No se pudo encontrar el proyecto :c</p>'))
        }
    })
}

function createProjectFormPage(req, res) {
    res.send(view.createProjectFormPage())
}

function createProject(req, res) {
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
    }

    service.createProject(project)
    .then(function (newProject) {
        res.send(view.createPage('Proyecto realizado con éxito!', `<p>${newProject.name} ha sido creado... es hora de verlo!</p>`))
    })
    .catch(function (error) {
        res.send(view.createPage('Error!', `<p>Ocurrio un error inesperado >:c</p>`))
    })
}

function editProjectForm(req, res) {
    const id = req.params.idProject
    service.getProjectById(id)
    .then(function (project) {
        if (project) {
            res.send(view.createEditProjectFormPage(project))
        }
        else {
            res.send(view.createPage('No pudimos encontrarlo :c!', '<h1>No pudimos encontrar el proyecto que solicitaste...!</h1>'))
        }
    })
}

function editProject(req, res) {
    const id = req.params.idProject

    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
    }
    service.editProject(id, project)
    .then(function (project) {
        if (project) {
            res.send(view.createPage('Proyecto modificado con éxito! :D', `<h2>${project.name} fue modificado con exito... es hora de ver los cambios!</h2>`))
        }
        else {
            res.send(view.createPage('No pudimos encontrarlo :c!', '<h1>No pudimos encontrar el proyecto que solicitaste...!</h1>'))
        }
    })
}

function deleteProjectForm(req, res) {
    const id = req.params.idProject
    service.getProjectById(id)
    .then(function (project) {
        if (project) {
            res.send(view.createDeleteProjectFormPage(project))
            }
        else {
            res.send(view.createPage('No pudimos encontrarlo :c!', '<h1>No pudimos encontrar el proyecto que solicitaste...!</h1>'))
         }
    })
}

function deleteProject(req, res) {
    const id = req.params.idProject
    service.deleteProject(id)
    .then(function (project) {
        if (project) {
            res.send(view.createPage('Proyecto eliminado ;D!', `<h2>Eliminaste el proyecto con éxito pa!</h2>`))
            }
        else {
            res.send(view.createPage('No pudimos encontrarlo :c!', '<h1>No pudimos encontrar el proyecto que solicitaste...!</h1>'))
        }
    })
}

export {
    getProjects,
    getProjectsBySection,
    getProjectById,
    createProjectFormPage,
    createProject,
    editProjectForm,
    editProject,
    deleteProject,
    deleteProjectForm
}