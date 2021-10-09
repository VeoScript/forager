import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const get_ingredient = await prisma.dishes.findMany({
    orderBy: [
      {
        date: 'desc'
      }
    ],
    select: {
      id: true,
      title: true,
      category: true,
      description: true,
      date: true,
      ingredients: true,
      user: {
        select: {
          avatar: true,
          name: true,
          username: true
        }
      }
    }
  })
  res.status(200).json(get_ingredient)
}