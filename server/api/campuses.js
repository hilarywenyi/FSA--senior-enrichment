
const router = require('express').Router();
const { Campus, Student } = require('../db');

module.exports = router;

//GET /api/campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({include: [Student] });
    res.json(campuses);
  } catch (error){
    next(error)
  }
});

//GET /api/campuses/:campusId 
router.get('/:campusId', async (req, res, next) => {
    try {
      const campus = await Campus.findById(req.params.campusId, {include: [Student]});
      res.json(campus)
    } catch (error) {
      next(error)
    }
});

//POST(adding) /api/campuses
router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(200).json(newCampus)
  } catch (error) {
    next(error)
  }
});

//DELETE
router.delete('/:campusId', async (req, res, next)=> { 
  try {
    const campus = await Campus.findById(req.params.campusId);
    await campus.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})


//PUT(updating) /api/campuses/:campusId
router.put('/:campusId', async (req, res, next) => {
  try {
    var x = await Campus.update(req.body, {where: {id: req.params.id}, returning: true})
    res.json({
      message: 'Updated Sucessfully',
      campus: x[1][0]
    })
  } catch (error) {
    next(error)
  }
})