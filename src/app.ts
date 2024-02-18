import express, { json } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(json())
app.get('/test', (req, res, next) => {
  res.status(200).json({ test: 'hello world' })
})

export default app
