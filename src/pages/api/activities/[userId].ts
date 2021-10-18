import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  const get_activities = await prisma.activities.findMany({
    where: {
      userId: String(userId)
    },
    orderBy: [
      {
        countId: 'desc'
      }
    ],
    select: {
      id: true,
      date: true,
      message: true,
      dish: {
        select: {
          id: true,
          title: true
        }
      },
      user: {
        
      }
    }
  })
  res.status(200).json(get_activities)
}