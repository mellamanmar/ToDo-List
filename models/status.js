const mongoose = require('mongoose')

const Schema = mongoose.Schema
const StatuSchema = new Schema ({
  status: {
    type: String,
    require: true,
    maxLength: 50
  }
})
module.exports = mongoose.model('Status', StatuSchema)
