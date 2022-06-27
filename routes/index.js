const express = require('express')
const router = express.Router()

router.use('/habits', require('./habits'))
router.use('/userHabits', require('./userHabits'))
router.use('/userLogin', require('./userLogin'))

module.exports = router