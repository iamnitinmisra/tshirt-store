require('dotenv').config();
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const authCtrl = require('./controllers/authCtrl')

// Server
const app = express();
app.use(express.json())

// Session
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 60 * 24 * 7}, // One Week
    secret: SESSION_SECRET
}))

// API Endpoints
// Auth:
app.get('/auth/login', authCtrl.login)

// Database & Server Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set("db", db)
    console.log("Database connection established")
    app.listen(SERVER_PORT, ()=>console.log(`Server is listening on ${SERVER_PORT}`))
})