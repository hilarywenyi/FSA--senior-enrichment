
const router = require('express').Router();
//const { Campus } = require('../db/index');
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
    console.log('campus', newCampus)
    res.status(200).json(newCampus)
  } catch (error) {
    next(error)
  }
});

//DELETE
router.delete('/:campusId', async (req, res, next)=> { 
  try {
    const campus = await Campus.findById(req.params.campusId);
    console.log('campus in backend', campus)
    await campus.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})


//PUT(updating) /api/campuses/:campusId
router.put('/:campusId', async (req, res, next) => {
  try {
    // const campus = await Campus.findById(req.params.id);
    // res.json(campus.update(req.body));
    var x = await Campus.update(req.body, {where: {id:req.params.id},returning: true})
  } catch (error) {
    next(error)
  }
})