import express from 'express'
import getIssues from '../ctl/getIssues'

const router = express.Router()

router.route('/issues').get(getIssues)
