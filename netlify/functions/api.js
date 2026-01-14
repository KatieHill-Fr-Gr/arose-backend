import express from 'express'
import serverless from 'serverless-http'

import morgan from 'morgan'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'

import verifyToken from '../../middleware/verifyToken.js'

import { authRouter } from '../../controllers/auth.js'
import { projectsRouter } from '../../controllers/projects.js'


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', process.env.FRONTEND_URL].filter(Boolean),
    credentials: true
}))

app.get('/', async (req, res, next) => {
    try {
        res.json({ message: 'This API is up and running' })
    } catch (err) {
        next(err)
    }
})

app.use('/auth', authRouter)
app.use('/projects', projectsRouter)

app.get('/protected-route', verifyToken, (req, res, next) => {
    console.log(req.user)
    return res.json({ message: "Protected route working" })
})


const startServers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected')
    } catch (err) {
        console.log(err)
    }
}

startServers()

export const handler = serverless(app)