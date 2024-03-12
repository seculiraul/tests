import express, { json } from 'express'
import cors from 'cors'
//import router from './routes/testt'
import router from './routes/issuesRoutes'
import errorMiddleware from './middleware/errorMiddleware'

const app = express()

app.use(cors())
app.use(json())
app.use(router)
app.use(errorMiddleware)

export default app
