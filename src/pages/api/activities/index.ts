import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const get_activities = await prisma.activities.findMany({
    orderBy: [
      {
        countId: 'desc'
      }
    ],
    select: {
      id: true,
      date: true,
      notificationtype: true,
      read: true,
      recipient: true,
      sender: true,
      message: true,
      user: {
        select: {
          id: true,
          avatar: true,
          name: true,
          username: true
        }
      },
      dish: {
        select: {
          id: true,
          title: true
        }
      }
    }
  })
  res.status(200).json(get_activities)
}