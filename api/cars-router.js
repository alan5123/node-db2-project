const express = require('express')
const knex = require('knex')
const knexfile = require('../knexfile.js')

const db = knex(knexfile.development)

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to retrieve cars' });
      });
})

router.get('/:id', (req, res) => {
    db('cars').where({id: req.params.id}).first()
    .then(car =>{
        res.json(car)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to retrieve car' });
      });
})

router.post('/', (req,res) => {
    db('cars')
    .insert(req.body)
    .then((car)=> {
        res.status(201).json(car)
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to add car' });
      });
})

module.exports = router;