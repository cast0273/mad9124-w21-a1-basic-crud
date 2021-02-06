const express = require('express')
const validateStudentID = require('../middleWare/validateStudentID')
const router = express.Router()
const {student} = require('../data/student.js')

router.use('/:student', validateStudentID)

router.get('/', (req, res) => res.send({data: student}))

router.get('/student/:studentId', (req, res)=>{
  const specificStudent = student.find(specificStudent => specificStudent.id === parseInt(req.params.student))
  res.send({data: specificStudent})
})

router.post('/api/student', (req, res) => {
  const {id, code, title, description, url} = req.body
  const newStudent = {
    id: Date.now(),
    code,
    title,
    description,
    url
  }
  student.push(newStudent)
  res.status(201).send({data: newStudent})
})

router.put('/api/student/:studentId', (req, res) => {
  
    const {code, title, description, url} = req.body
    const updatedStudent = {id, code, title, description, url}
    student[req.studentIndex] = updatedStudent
    res.send({data: updatedStudent})
  
})

router.patch('/api/student/:studentId', (req, res) => {
  
    const {id, ...theRest} = req.body
    const updatedStudent = Object.assign({}, student[index], theRest)
    student[req.studentIndex] = updatedStudent
    res.send({data: updatedStudent})
  
})

router.delete('/api/student/:studentId', (req, res) => {
  
    // splice returns an array of the removed items
    const deletedStudent = student.splice(req.studentIndex, 1)
    res.send({data: deletedStudent[0]})

})

module.exports = router
