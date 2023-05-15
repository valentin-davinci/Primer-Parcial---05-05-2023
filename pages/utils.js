function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'
    html += '<title>' + title + '</title></head><body>'

    html += '<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="nav-link" href="/projects/mobile">Mobile</a> | <a class="nav-link" href="/projects/landing">LandingPage</a> | <a class="nav-link" href="/projects/webapp">Web App</a> | <a class="nav-link" href="/projects/ecommerce">e-Commerce</a> | <a class="nav-link" href="/projects/game">Games</a></nav>'


    html += '<a class="nav-link" href="/projects"> Proyectos</a><a class="nav-link" href="/projects/nuevo">Nuevo Proyecto</a>'

    html += content
    html += '</body> </html>'

    return html
}

export {
    createPage,
}