import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const delete_ingredient = await prisma.dishes.deleteMany({
    where: {
      id: req.body.dishId,
      userId: req.body.userId
    }
  })
  res.status(200).json(delete_ingredient)
}