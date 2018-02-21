import express from 'express'
import path from 'path';
import mongoose from 'mongoose'
import bodyParse from 'body-parser'
import dotenv from 'dotenv'
import Promise from 'bluebird'

import auth from './routes/auth'
import users from './routes/users'

dotenv.config()
const app = express();
app.use(bodyParse.json())
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URL)

app.use('/api/auth', auth)
app.use('/api/users', users)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(8081, () => console.log('Running on localhost:8081'))