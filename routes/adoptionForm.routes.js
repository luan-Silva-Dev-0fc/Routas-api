const express = require('express')
const router = express.Router()
const { submitForm } = require('../controllers/adoptionForm.controller')

router.post('/', submitForm)

module.exports = router
