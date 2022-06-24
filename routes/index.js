const express = require('express')
const router = express.Router()

router.use('/habits', require('./habits'))
router.use('/userHabits', require('./userHabits'))

module.exports = router