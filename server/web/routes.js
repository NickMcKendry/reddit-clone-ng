const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res, next) => {
  console.log('GET');
  knex('post')
    .then(post => res.json(post))
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  console.log('POST');
  knex('post')
    .insert(req.body)
    .returning('*')
    .then(post => res.json(post[0]))

    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  console.log('DELETE', req.params.id);
  knex('post')
  .del()
  .where({id: req.params.id})
  .then(post => res.end())
  .catch(err => next(err))
})






module.exports = router
