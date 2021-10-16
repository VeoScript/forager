import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  const get_bookmarks = await prisma.bookmarks.findMany({
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
      dish: {
        select: {
          id: true,
          title: true,
          category: true,
          ingredients: {
            select: {
              ingredient:true
            }
          },
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  })
  res.status(200).json(get_bookmarks)
}