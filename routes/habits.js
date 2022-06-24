const express = require("express")
const router = express.Router()

const habitsController = require("../controllers/habits") 

router.get('/', habitsController.index)
router.get('/:id', habitsController.show)
router.post('/', habitsController.create)
router.put('/:id', habitsController.edit)
router.delete('/:id', habitsController.delete)

module.exports = router