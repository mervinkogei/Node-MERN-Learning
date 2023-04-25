const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler (async (req, res) =>{
    res.json({message:"Get Goals"})
})

const setGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new `Please add a textfield text`
    }
    res.json({ message: "Create Goal" })
})

const updateGoals = asyncHandler(async (req, res) =>{
    res.json({ message: `Update Goals ${req.params.id}` })
})

const deleteGoals = asyncHandler(async (req, res) =>{
    res.json({ message: `Delete Goals ${req.params.id}` })
})


module.exports = {
    getGoals, setGoal, updateGoals, deleteGoals
}