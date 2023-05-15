import * as service from '../../services/projects.services.js'

function getProjects(req, res) {
    const filter = req.query

    service.getProjects(filter)
        .then(function (projects) {
            res.status(200).json(projects)
        })
}

function getProjectsBySection(req, res) {
    const section = req.params.section

    service.getProjectsBySection(section)
        .then(function (projects) {
            if (projects) {
                res.status(200).json(projects)
            }
            else {
                res.status(404).json({ error: { message: `No se pudo encontrar el proyecto :c` }})
            }
        })
}

function getProjectById(req, res) {
    const idProject = req.params.idProject

    service.getProjectById(idProject)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({ error: { message: `No se pudo encontrar el proyecto :c` }})
            }
        })
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
        .then(function (project) {
            res.status(201).json(project)
        })
}

function replaceProject(req, res) {
    const idProject = req.params.idProject

    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
    }

    service.editProject(idProject, project)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({ error: { message: `No se pudo encontrar el proyecto :c` }})
            }
        })

}

function deleteProject(req, res) {
    const idProject = req.params.idProject
    service.deleteProject(idProject)
    .then(function (project) {
        if (project) {
            res.status(200).json(project)
        }
        else {
            res.status(404).json({ error: { message: `No se pudo encontrar el proyecto :c` }})
        }
    })
}

function updateProject(req, res) {
    const idProject = req.params.idProject

    const project = {}

    if (req.body.name) {
        project.name = req.body.name
    }

    if (req.body.description) {
        project.description = req.body.description
    }

    if (req.body.link) {
        project.link = req.body.link
    }

    if (req.body.img) {
        project.img = req.body.img
    }

    if (req.body.technologies) {
        project.technologies = req.body.technologies
    }

    if (req.body.section) {
        project.section = req.body.section
    }


    service.editProject(idProject, project)
        .then(function (project) {
        if (project) {
            res.status(200).json(project)
        }
        else {
            res.status(404).json({ error: { message: `No se pudo encontrar el proyecto :c` }})
        }
    })

}

export {
    getProjects,
    createProject,
    getProjectById,
    replaceProject,
    updateProject,
    deleteProject,
    getProjectsBySection,
}