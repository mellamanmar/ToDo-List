const Status = require('../models/status')

const controllerStatus = {
  // create: async (req,res) => {
  //   try {
  //     const status = req.body.status
  //     await Status.create ({
  //       status : status
  //     })
  //     res.json({msg:'Created'})

  //   } catch (error) {
  //     return res.status(500).json ({msg:error.message})
  //   }
  // }

  get: async (req,res) => {
    try {
      const status = await Status.find({})

      res.json(
        status,
        )
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  getById: async (req,res) => {
    try {
      const {id} = req.params
      const status = await Status.findById(id)

      res.json(
        status,
        )
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  update: async (req,res) => {
    try {
      const {id} = req.params
      const status = req.body.status
      await Status.findByIdAndUpdate(id, {
        status : status
      })

      res.json({msg:'Updated'})
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },

  // delete: async (req,res)=>{
  //   try {
  //       const {id} = req.params
  //       await Status.findByIdAndDelete(id)
  //       res.json({msg:'Deleted'})
  //   } catch (err) {
  //       console.error(err)
  //       return res.status(500).json({msg:err.message})
  //   }
  // },
}

module.exports = controllerStatus
