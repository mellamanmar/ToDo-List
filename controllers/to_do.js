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

  },

  get: async (req,res) => {
    try {
      const task = await toDo.find({})
      const task_responsable = await toDo.find({})
      const deadline = await toDo.find({})
      const status = await toDo.find({})
      const update = await toDo.find({})

      res.json(
        task,
        task_responsable,
        deadline,
        status,
        update
        )
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  getById: async (req,res) => {
    try {
        const {id} = req.params
        const task = await toDo.findById(id)
        const task_responsable = await toDo.findById(id)
        const deadline = await toDo.findById(id)
        const status = await toDo.findById(id)
        const update = await toDo.findById(id)
        res.json(
          task,
          task_responsable,
          deadline,
          status,
          update
          )
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},

update: async (req,res) =>{
  try{
      const {id} = req.params
      const task = req.body.ToDoTask
      const task_responsable = req.body.task_responsable
      const deadline = req.body.deadline
      const status = req.body.status
      const update = req.body.update
      await toDo.findByIdAndUpdate(id,{
        task : task,
        task_responsable : task_responsable,
        deadline : deadline,
        status : status,
        update : update
      })
      res.json({msg:'Updated'})
  }catch(error){
      console.error(error)
      return res.status(500).json({msg:error.message})
  }
},

delete: async (req,res)=>{
  try {
      const {id} = req.params
      await toDo.findByIdAndDelete(id)
      res.json({msg:'Deleted'})
  } catch (err) {
      console.error(err)
      return res.status(500).json({msg:err.message})
  }
},
}


module.exports = controllerToDO
