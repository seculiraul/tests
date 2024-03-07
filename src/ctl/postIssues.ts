import { Request, Response } from 'express'
import Issues from '../model/Issues'
import handleAsync from '../util/handleAsync'

const postIssues = handleAsync(async (req: Request, res: Response) => {
  try {
    const issue = await Issues.create(req?.body)

    res.status(201).json({
      issue,
    })
  } catch (error) {
    console.log(error)
  }
})

export default postIssues
