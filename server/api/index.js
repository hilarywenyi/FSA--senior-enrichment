'use strict'

const apiRouter = require('express').Router()

apiRouter.use('/campuses', require('./campuses'));
apiRouter.use('/students', require('./students'));

apiRouter.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = apiRouter;
