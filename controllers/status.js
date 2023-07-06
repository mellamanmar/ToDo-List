const Status = require('../models/status')

const controllerStatus = {
  create: async (req,res) => {
    try {
      const status = req.body.status
      await Status.create ({
        status : status
      })
      res.json({msg:'Created'})

    } catch (error) {
      return res.status(500).json ({msg:error.message})
    }
  }

}

module.exports = controllerStatus
