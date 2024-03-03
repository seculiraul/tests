import express from 'express'

const router = express.Router()

router.route('/test').get((req, res, next) => {
  res.status(200).json({ test: 'hello world test' })
})

export default router
