const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoals, deleteGoals } = require('../controller/goalController')


router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoals).put(updateGoals)

module.exports = router;