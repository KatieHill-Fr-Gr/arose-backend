import express from 'express'

import Project from '../models/projects.js'
import errorHandler from '../middleware/errorHandling.js'
import verifyToken from '../middleware/verifyToken.js' 

const router = express.Router()

// * Routes

router.get('/', async (req, res, next) => {
    console.log('Index hit')
    try {
        const allProjects = await Project.find()
        return res.json(allProjects)
    } catch (err) {
        console.log(err)
        next(err)
    }
})

router.post('/new', async (req, res, next) => {
    try {
        const newProject = await Project.create(req.body)
        return res.status(201).json(newProject)
    } catch (err) {
        next(err)
    }
})




export { router as projectsRouter }