import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { jokes } from './jokeList.js'


const app = express()

app.get('/api/jokes', (req, res)=>{
    res.send(jokes)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Backend Server : http://localhost:${process.env.PORT}/`)
})