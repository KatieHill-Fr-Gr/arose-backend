import express from 'express'
const router = express.Router()


router.get('/', async (req, res, next) => {
    try {
    } catch (err) {
        next(err)
    }
})

export { router as defaultRouter }