import express from 'express'
import { defaultRouter } from '/controllers/default.js'

const app = express()
const port= 3000

app.use(defaultRouter)

app.listen(3000, () => console.log("Server running"))
