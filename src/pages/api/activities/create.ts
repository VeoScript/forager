import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const create_activity = await prisma.activities.create({
    data: {
      date: String(new Date()),
      notificationtype: req.body.notificationtype,
      recipient: req.body.recipient,
      sender: req.body.sender,
      message: req.body.message,
      dishId: req.body.dishId,
      userId: req.body.userId
    }
  })
  res.status(200).json(create_activity)
}