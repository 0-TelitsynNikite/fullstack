const db = require('../db')

class LoginOrRegisterUser {

    //sign in person
    async login(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO posts (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson)
    }

    //sign up person
    async register(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(`INSERT INTO posts (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson)
    }
}

module.exports = new LoginOrRegisterUser()