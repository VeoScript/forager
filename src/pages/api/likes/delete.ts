import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const create_like = await prisma.likes.deleteMany({
    where: {
      dishId: req.body.dishId,
      userId: req.body.userId
    }
  })
  res.status(200).json(create_like)
}