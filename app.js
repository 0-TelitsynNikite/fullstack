//libraries
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//files
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')

//middlewares
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(require('cors')())

//routes
app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


module.exports = app