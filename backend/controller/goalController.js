const getGoals = (req, res) =>{
    res.json({message:"Get Goals"})
}

const setGoal = (req, res) =>{
    res.json({ message: "Create Goal" })
}

const updateGoals = (req, res) =>{
    res.json({ message: `Update Goals ${req.params.id}` })
}

const deleteGoals = (req, res) =>{
    res.json({ message: `Delete Goals ${req.params.id}` })
}


module.exports = {
    getGoals, setGoal, updateGoals, deleteGoals
}