// import libraries
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// import another files
const db = require('../db')


class LoginOrRegisterUser {

    // Sign in person
    async login(req, res) {
        const {email, password} = req.body
        const candidate = await db.query(`SELECT * FROM users WHERE email = $1`, [email])

        if (candidate.rowCount) {
            const passwordResult = bcrypt.compareSync(password, candidate.rows[0].password)

            if (passwordResult) {
                // Let's generate TOKEN

                const token = jwt.sign({
                    email: email,
                    userId: candidate.rows[0].id
                }, process.env.DEV_JWT, {expiresIn: 3600})

                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else {
                // Passwords did not match

                res.status(401).json({
                    message: 'Неверно указан пароль'
                })
            }
        } else {
            res.status(404).json({
                message: 'Пользователь с таким email не найден'
            })
        }
    }

    // Sign up person
    async register(req, res) {
        const {email, password} = req.body
        const candidate = await db.query(`SELECT * FROM users WHERE email = $1`, [email])

        if (candidate.rowCount) {
            // There's the user in the table

            res.status(409).json({
                message: 'Такой email уже занят'
            })
        } else {
            // Let's make a user

            const salt = bcrypt.genSaltSync(10)
            const userPassword = password
            const user = await db.query(`INSERT INTO users (email, password) values ($1, $2) RETURNING *`, [email, bcrypt.hashSync(password, salt)])

            try {
                res.status(201).json(user.rows)
            } catch(e) {
                console.error(e)
            }

        }
    }
}

module.exports = new LoginOrRegisterUser()