
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
      res.send(campus)
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
  const campus = await Campus.findById(req.params.id);
  if (!campus) return res.status(404).send();
  try {
    await Campus.destroy({where: {id:req.params.id}})
    res.status(200).send()
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