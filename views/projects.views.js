import { createPage } from '../pages/utils.js'

function createProjectListPage(projects) {
    let html = '<h1 class="text-center">Lista de Projectos</h1>'
    html += '<div>'

    for (let i = 0; i < projects.length; i++) {
        html += `

        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Nombre del proyecto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Tecnologias</th>
                <th scope="col">Link al repositorio</th>
                <th scope="col">Imagen del proyecto</th>
                <th scope="col">ABM</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${projects[i].name}</td>
                <td>${projects[i].description}</td>
                <td>${projects[i].technologies}</td>
                <td>${projects[i].link}</td>
                <td><img src='${projects[i].img}' /></td>
                <td><a href="/projects/${projects[i]._id}/edit">Editar</a> 
                <a href="/projects/${projects[i]._id}/delete">Borrar</a>
                </td>
            </tr>
        </tbody>
        </table>`
    }

    html += '</div>'

    return createPage('Proyectos', html)
}


function createProjectFormPage() {
    let html = '<h1>Crear proyecto</h1>'
    html += '<form action="/projects/nuevo" method="POST">'
    html += '<input type="text" name="name" placeholder="Nombre">'
    html += '<input type="text" name="description" placeholder="Descripción">'
    html += '<input type="text" name="link" placeholder="Link">'
    html += '<input type="text" name="technologies" placeholder="Tecnologias">'
    html += '<input type="text" name="section" placeholder="Sección">'
    html += '<input type="text" name="img" placeholder="URL de la imagen">'
    html += '<button type="submit">Crear proyecto</button>'
    html += '</form>'

    return createPage('Crear proyecto!', html)
}


function createEditProjectFormPage(project) {
    let html = '<h1>Editar proyecto</h1>'
    html += `
    <form action="/projects/${project._id}/edit" method="POST">
        <input type="text" name="name" placeholder="Nombre" value="${project.name}">
        <input type="text" name="description" placeholder="Descripción" value="${project.description}">
        <input type="text" name="link" placeholder="Link" value="${project.link}">
        <input type="text" name="technologies" placeholder="Tecnologias" value="${project.technologies}">
        <input type="text" name="section" placeholder="Sección" value="${project.section}">
        <input type="text" name="img" placeholder="URL de la imagen" value="${project.img}">
        <button type="submit">Editar</button>
    </form>`

    return createPage('Editar proyecto', html)
}

function createDeleteProjectFormPage(project) {
    let html = `<div class="text-center"><img src="${project.img}"></img></div>`
    html += `<h1 class="text-center">${project.name}</h1>`
    html += `<p class="text-center">${project.description}</p>`
    html += `<p class="text-center"><a href="${project.link}">${project.link}</a></p>`
    html += `<p class="text-center">Tecnologías: ${project.technologies}</p>`
    html += `<p class="text-center">Sección: ${project.section}</p>`

    html += `<div class="text-center"><form action="/projects/${project._id}/delete" method="POST">
    <p>¿Seguro que querés eliminar este proyecto? No hay vuelta atras...</p>
        <button class="btn btn-primary" type="submit">No me importa, quiero eliminarlo.</button>
    </form></div>`

    return createPage(project.name, html)
}


export {
    createProjectListPage,
    createPage,
    createEditProjectFormPage,
    createDeleteProjectFormPage,
    createProjectFormPage,
}