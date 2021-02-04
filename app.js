'use strict'
// load dependencies
const express = require('express')
// const studentRouter = require('./routes/studentRouter.js')
const courseRouter = require('./routes/courseRouter.js')

// create the express app
const app = express()

// configure express middleware
app.use(express.json())

// define routes
app.use('/api/course', courseRouter)
// app.use('/api/student', studentRouter)



// start listening for HTTP requests
const port = process.env.port || 3030
app.listen(port, () => console.log(`Server listening on port ${port} ...`))
