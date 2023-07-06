const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ResponsableSchema = new Schema ({
  task_responsable: {
    type: String,
    require: true,
    maxLength: 100
  }
})
module.exports = mongoose.model('TaskResponsable', ResponsableSchema)
