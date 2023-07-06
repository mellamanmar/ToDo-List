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
  }
}

module.exports = controllerResponsable
