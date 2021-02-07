const express = require('express')
const validateStudentId = require('../middleWare/validateStudentId')
const router = express.Router()
const {student} = require('../data/student')

router.use('/:studentId', validateStudentId)

router.get('/', (req, res) => res.send({data: student}))

router.get('/:studentId', (req, res)=>{
  const selectedStudent = student.find(selectedStudent => selectedStudent.id === parseInt(req.params.studentId))
  res.send({data: selectedStudent})
})

router.post('/', (req, res) => {
  const {firstName, lastName, nickName, email} = req.body
  const newStudent = {
    firstName,
    lastName,
    nickName,
    email
  }
  student.push(newStudent)
  res.status(201).send({data: newStudent})
})

router.put('/:studentId', (req, res) => {
  const {firstName, lastName, nickName, email} = req.body;
  const id = parseInt(req.params.studentId);
  const updatedStudent = { id, firstName, lastName, nickName, email};
  student[req.studentIndex] = updatedStudent;
  res.send({ data: updatedStudent });
});

router.patch('/:studentId', (req, res) => {
  
    const {id, ...theRest} = req.body
    const updatedStudent = Object.assign({}, student[req.studentIndex], theRest)
    student[req.studentIndex] = updatedStudent
    res.send({data: updatedStudent})
  
})

router.delete('/:studentId', (req, res) => {
  
    // splice returns an array of the removed items
    const deletedStudent = student.splice(req.studentIndex, 1)
    res.send({data: deletedStudent[0]})

})

module.exports = router
