const Responsable = require('../models/responsables')

const controllerResponsable = {
  create: async (req,res) => {
    try {
      const task_responsable = req.body.task_responsable
      await Responsable.create ({
        task_responsable : task_responsable
      })
      res.json({msg:'Created'})
    }
    catch (error) {
      return res.status(500).json ({msg:error.message})
    }
  },

  get: async (req,res) => {
    try {
      const task_responsable = await Responsable.find({})

      res.json(
        task_responsable,
        )
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  getById: async (req,res) => {
    try {
      const {id} = req.params
      const task_responsable = await Responsable.findById(id)

      res.json(
        task_responsable,
        )
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  update: async (req,res) => {
    try {
      const {id} = req.params
      const task_responsable = req.body.task_responsable
      await Responsable.findByIdAndUpdate(id, {
        task_responsable : task_responsable
      })

      res.json({msg:'Updated'})
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  delete: async (req,res)=>{
    try {
        const {id} = req.params
        await Responsable.findByIdAndDelete(id)
        res.json({msg:'Deleted'})
    } catch (err) {
        console.error(err)
        return res.status(500).json({msg:err.message})
    }
  },
}

module.exports = controllerResponsable
