import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const get_comments = await prisma.comments.findMany({
    orderBy: [
      {
        date: 'desc'
      }
    ],
    select: {
      id: true, 
      comment: true,
      date: true,
      dishId: true,
      userId: true
    }
  })
  res.status(200).json(get_comments)
}