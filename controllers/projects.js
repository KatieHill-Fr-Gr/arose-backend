import express from 'express'

import Project from '../models/projects.js'
import errorHandler from '../middleware/errorHandling.js'
import verifyToken from '../middleware/verifyToken.js' 

import { InvalidData, NotFound } from '../utils/errorClasses.js'
import { Unauthorized } from '../utils/errorClasses.js'

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

router.get('/:projectId', async (req, res, next) => {
    try {
        const { projectId } = req.params
        const project = await Project.findById(projectId)
        if (!project) throw new NotFound('Project not found')
        return res.json(project)
    } catch (err) {
        next(err)
    }
})

router.put('/:projectId', async (req, res, next) => {
    try {
        const { projectId } = req.params
        const project = await Project.findById(projectId)
        if (!project) throw new NotFound('Project not found')
        const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, {
    new: true})
        return res.json(updatedProject)
    } catch (err) {
        next(err)
    }
})





export { router as projectsRouter }