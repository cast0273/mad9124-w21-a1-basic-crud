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

// router.post('/', (req, res) => {
//   const {make, model, colour} = req.body
//   const newCar = {
//     id: Date.now(),
//     make,
//     model,
//     colour
//   }
//   cars.push(newCar)
//   res.status(201).send({data: newCar})
// })

// router.put('/:carId', (req, res) => {
//   const { make, model, colour } = req.body;
//   const id = parseInt(req.params.carId);
//   const updatedCar = { id, make, model, colour };

//   cars[req.carIndex] = updatedCar;
//   res.send({ data: updatedCar });
// });

// router.patch('/:carId', (req, res) => {
  
//     const {id, ...theRest} = req.body
//     const updatedCar = Object.assign({}, cars[req.carIndex], theRest)
//     cars[req.carIndex] = updatedCar
//     res.send({data: updatedCar})
  
// })

// router.delete('/:carId', (req, res) => {
  
//     // splice returns an array of the removed items
//     const deletedCars = cars.splice(req.carIndex, 1)
//     res.send({data: deletedCars[0]})

// })

module.exports = router
