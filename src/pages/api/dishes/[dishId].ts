import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { dishId } = req.query
  const get_dishes = await prisma.dishes.findFirst({
    where: {
      id : String(dishId)
    },
    select: {
      id: true,
      title: true,
      category: true,
      description: true,
      date: true,
      ingredients: true,
      bookmarks: true,
      likes: {
        select: {
          id: true,
          dishId: true,
          userId: true
        }
      },
      comments: {
        orderBy: [
          {
            countId: 'asc'
          }
        ],
        select: {
          id: true,
          comment: true,
          date: true,
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      },
      user: {
        select: {
          id: true,
          avatar: true,
          name: true,
          username: true
        }
      }
    }
  })
  res.status(200).json(get_dishes)
}