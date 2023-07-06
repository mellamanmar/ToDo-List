const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ToDoSchema = new Schema ({
  task: {
    type: String,
    require: true,
  },
  task_responsable: {
    type: Schema.Types.String,
    ref: "TaskResponsable",
    require: true
  },
  deadline: {
    type: Date,
    require: true
  },
  status: {
    type: Schema.Types.ObjectId,
    ref: "Status",
    require: true
  },
  update: {
    type: String,
    maxLength: 500
  }
})
module.exports = mongoose.model('ToDo', ToDoSchema)
