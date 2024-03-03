import { Request, Response } from 'express'

const postIssues = (req: Request, res: Response) => {
  try {
    const { body } = req

    const x = body.x
    console.log(x)
    res.status(200).json({
      data: x,
    })
  } catch (error) {
    console.log(error)
  }
}

export default postIssues
