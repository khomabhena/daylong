const express = require('express')
const mongoose = require("mongoose")
const Router = require('./routes')
require('dotenv').config()

const USERNAME = 'khomabhena'
const PASSWORD = 'ItO7tGTPutI85JIC'
const CLUSTER = 'daylong.26os0uw'

const app = express()
app.use(express.json())
app.use(Router)

mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, "connection failed"))
db.once("open", () => {
    console.log("Connected to the database successfully")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})