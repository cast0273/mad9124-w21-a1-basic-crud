const express = require('express')
const validateCourseID = require('../middleWare/validateCourseID')
const router = express.Router()
const {course} = require('../data/course.js')

router.use('/:courseId', validateCourseID)

router.get('/', (req, res) => res.send({data: course}))

router.get('/:courseId', (req, res)=>{
  // const car = cars.find(car => car.id === parseInt(req.params.carId))
  res.send({data: course[req.courseIndex]})
})

router.post('/api/course', (req, res) => {
  const {id, code, title, description, url} = req.body
  const newCourse = {
    id: Date.now(),
    code,
    title,
    description,
    url
  }
  course.push(newCourse)
  res.status(201).send({data: newCourse})
})

router.put('/api/course/:courseId', (req, res) => {
  
    const {code, title, description, url} = req.body
    const updatedCourse = {id, code, title, description, url}
    course[req.courseIndex] = updatedCourse
    res.send({data: updatedCourse})
  
})

router.patch('/api/course/:courseId', (req, res) => {
  
    const {id, ...theRest} = req.body
    const updatedCourse = Object.assign({}, course[index], theRest)
    course[req.courseIndex] = updatedCourse
    res.send({data: updatedCourse})
  
})

router.delete('/api/course/:courseId', (req, res) => {
  
    // splice returns an array of the removed items
    const deletedCourse = course.splice(req.courseIndex, 1)
    res.send({data: deletedCourse[0]})

})

module.exports = router
