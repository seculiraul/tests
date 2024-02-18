// src/server.ts
import mongoose from 'mongoose'
import app from './app'

const PORT = process.env.PORT || 3000

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

start()
