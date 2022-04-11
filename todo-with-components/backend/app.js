require('dotenv').config({ path: '../.env' })

const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')
// console.log(process.env)
const user = process.env.MONGO_USERNAME
const pass = process.env.MONGO_PASSWORD
const url = process.env.MONGO_URL
const port = process.env.MONGO_PORT
const db = process.env.MONGO_DB_NAME
// console.log(user)

mongoose.connect(
     `mongodb://${user}:${pass}@${url}:${port}/${db}`
).then(() => console.log('Connexion à MongoDB réussie'))
.catch((e) => console.log(e, 'Connexion à MongoDB échouée !') )


const todoRoutes = require('./routes/todos')
const app = express()

app.use(express.json())

app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}))

app.use('/ping', (req, res) => {
    res.status(200).send('PING OK')
})

app.use('/api/v1/todos', todoRoutes);

module.exports = app;