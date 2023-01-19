if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json()) 
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}))

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true } )
const db = mongoose.connection

db.on('error', err => {console.log(err)})
db.once('open', () => console.log('Connected'))

const users = require('./routes/users')
app.use('/users', users)

app.listen(3000, () => console.log('Servidor encendido'))
