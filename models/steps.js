
const db = require("../data/config")

function find() {
    return db('steps')
}

function findById(id) {
    return db('steps as s')
        .where('s.id', id)
}

module.exports = {
    find,
    findById,
}