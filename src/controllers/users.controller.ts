import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express'
import User from '../model/User.model.js'

export const getUserInfo = async (req: Request, res: Response) => {
  const user = User.getInfo({
    email: 'olalekanbello534@gmail.com',
    currentDate: new Date(),
    github_url: 'https://github.com/OlaOluwalekan/basic-api-hng-task0',
  })

  res.status(StatusCodes.OK).json(user)
}
