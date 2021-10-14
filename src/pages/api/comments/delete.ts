import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const delete_comment = await prisma.comments.deleteMany({
    where: {
      id: req.body.commentId,
      userId: req.body.userId
    }
  })
  res.status(200).json(delete_comment)
}