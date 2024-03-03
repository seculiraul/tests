import express from 'express'
import getIssues from '../ctl/getIssues'
import postIssues from '../ctl/postIssues'

const router = express.Router()

router.route('/issues').get(getIssues).post(postIssues)

export default router
