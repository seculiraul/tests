import { Request, Response, NextFunction } from 'express'
import Issues from '../model/Issues'

const getIssues = async (req: Request, res: Response, next: NextFunction) => {
  const issues = await Issues.find()
  res.status(200).json({
    issues,
  })
}

export default getIssues
