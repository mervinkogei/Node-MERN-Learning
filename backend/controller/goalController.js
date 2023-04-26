const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModels')

const getGoals = asyncHandler (async (req, res) =>{
    const goals = await Goal.find()
    res.json(goals)
})

const setGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new `Please add a textfield text`
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.json(goal)
})

const updateGoals = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.json(updateGoal)
})

const deleteGoals = asyncHandler(async (req, res) =>{
    const goal = await Goal.findByIdAndDelete(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove
    // const updateGoal = await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json({id:req.params.id})
})


module.exports = {
    getGoals, setGoal, updateGoals, deleteGoals
}