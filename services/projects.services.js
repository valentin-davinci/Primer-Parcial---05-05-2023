import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getProjects(filter = {}) {
    await client.connect()

    const filterMongo = { deleted: { $ne: true } }

    if (filter?.section) {
        filterMongo.section = { $all: filter.section.split(";") }
    }
    return db.collection("projects").find(filterMongo).toArray()
}


async function getProjectById(id) {
    await client.connect()
    return db.collection("projects").findOne({ _id: new ObjectId(id) })
}

async function getProjectsBySection(section) {
    await client.connect()
    const filter = { section: section, deleted: { $ne: true } }
    return db.collection("projects").find(filter).toArray()
  }

async function createProject(project) {
    await client.connect()
    await db.collection("projects").insertOne(project)
    return project
}

async function deleteProject(idProject) {
    await client.connect()
    await db.collection("projects").deleteOne({ _id: new ObjectId(idProject) })
    return {
        id: idProject
    }
}

async function editProject(idProject, project) {
    await client.connect()
    await db.collection("projects").updateOne({ _id: new ObjectId(idProject) }, { $set: project })
    return project
}

async function replaceProject(idProject, project) {
    await client.connect()
    await db.collection("projects").replaceOne({ _id: new ObjectId(idProject) }, project)
    return project
}

export {
    getProjects,
    getProjectById,
    getProjectsBySection,
    createProject,
    editProject,
    deleteProject,
    replaceProject
}