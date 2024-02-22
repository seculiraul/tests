import { Request, Response, NextFunction } from 'express'

const getIssues = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([])
}

export default getIssues
