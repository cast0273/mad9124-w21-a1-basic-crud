const express = require('express')
const validateCourseId = require('../middleWare/validateCourseId')
const router = express.Router()
const {course} = require('../data/course')

router.use('/:courseId', validateCourseId)

router.get('/', (req, res) => res.send({data: course}))

router.get('/:courseId', (req, res)=>{
  const selectedCourse = course.find(selectedCourse => selectedCourse.id === parseInt(req.params.courseId))
  console.log(selectedCourse, selectedCourse.id);
  res.send({data: selectedCourse})
})

router.post('/', (req, res) => {
  const {code, title, description, url} = req.body
  const newCourse = {
    code,
    title,
    description,
    url
  }
  course.push(newCourse)
  res.status(201).send({data: newCourse})
})

router.put('/:courseId', (req, res) => {
  const {code, title, description, url} = req.body;
  const id = parseInt(req.params.courseId);
  const updatedCourse = { id, code, title, description, url};
  console.log(updatedCourse, 1)
  course[req.courseIndex] = updatedCourse;
  console.log(updatedCourse, 2)
  res.send({ data: updatedCourse });
  console.log(updatedCourse, 3)
});

router.patch('/:courseId', (req, res) => {
  
    const {id, ...theRest} = req.body
    const updatedCourse = Object.assign({}, course[req.carIndex], theRest)
    course[req.courseIndex] = updatedCourse
    res.send({data: updatedCourse})
  
})

router.delete('/:courseId', (req, res) => {
  
    // splice returns an array of the removed items
    const deletedCourse = course.splice(req.courseIndex, 1)
    res.send({data: deletedCourse[0]})

})

module.exports = router
