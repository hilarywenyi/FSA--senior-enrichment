const router = require('express').Router();
const { Student, Campus } = require('../db');

module.exports = router;

//GET /api/students
router.get('/', async (req, res, next)=> {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error){
    next(error)
  }
});

//GET /api/students/:studentId
router.get('/:studentId', async (req, res, next) => {
    try {
      const student = await Student.findById(req.params.studentId)
      res.json(student);
    } catch (error) {
       next(error)
    }
})

//POST(adding) /api/students/newStudent
router.post('/students/new-student', async (req, res, next) => {
  try {
     const newStudent = await Student.create(req.body);
     res.json(newStudent);
  } catch (error) {
    next(error)
  }
});

//DELETE
router.delete('/:studentId', async (req, res, next)=> {
  try {
    const student = await Student.findById(req.params.studentId);
    res.json(student.destroy())
  } catch (error) {
    next(error)
  }
})

//PUT(updating) /api/students/:studentId
// router.put('/:studnetId', async (req, res, next) => {
//   try {
//     const student = await Student.findById(req.params.studentId);
//     res.json(student.update(req.body));   
//   } catch (error) {
//     next(error)
//   }
// })
router.put('/:studentId', (req,res,next) =>{
  const id = req.params.studentId;
  return Student.update(req.body, {where: {id}})
  .then(()=>{
    return Student.findById(id)
    .then(student => res.json(student))
  })
  .catch(next)
});
