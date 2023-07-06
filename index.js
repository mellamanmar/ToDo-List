const bodyParser = require("body-parser");
const express = require ("express")
const mongoose = require('mongoose');
require('dotenv').config();

const toDoRouter = require ('./routes/to_do')
const responsableRouter = require ('./routes/responsable')
const statusRouter = require ('./routes/status')


const app = express()
const port = 3000

//middlewares
app.set ('port', port)
app.set ('view engine', 'ejs')
app.use (express.static("public"))
app.use (bodyParser.urlencoded({extended:true}))
app.use (bodyParser.json())
app.use (express.json())
app.use ('/api/todo', toDoRouter)
app.use ('/api/responsable', responsableRouter)
app.use ('/api/status', statusRouter)


app.get('/api/todo', (req, res) => {
  res.render('index.ejs')
})

// app.get  ("/", (req, res) => {
//   res.send ("Hola mundo");
// })


mongoose.connect(process.env.MONGO_DB_URI)
.then(() => console.log('connected to db'))
.catch((err)=> console.log(err))

app.listen (port, () =>  {
  console.log(`Mi puerto es ${port}`)
})
