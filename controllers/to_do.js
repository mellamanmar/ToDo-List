const toDo = require('../models/to_do')

const controllerToDO = {
  create: async (req,res) => {
    try {
      const task = req.body.ToDoTask
      const task_responsable = req.body.task_responsable
      const deadline = req.body.deadline
      const status = req.body.status
      const update = req.body.update
      await toDo.create ({
        task : task,
        task_responsable : task_responsable,
        deadline : deadline,
        status : status,
        update : update
      })
      res.json({msg:'Created'})

    } catch (error) {
      return res.status(500).json ({msg:error.message})
    }

  }
}


module.exports = controllerToDO
