import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    console.log(`Request: ${req.method} - ${req.originalUrl}`)
    res.send(`<h1>Welcome to my portfolio</h1>`)
})

router.get('/about', (req, res) => {
    console.log(`Request: ${req.method} - ${req.originalUrl}`)
    res.send(`<h1>About me</h1>`)
})

export { router as projectsRouter }