require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 8000

//start server
app.listen(port, () => console.log(`Server has been started on ${port} port`))