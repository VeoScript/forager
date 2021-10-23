import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const get_ingredients = await prisma.ingredients.findMany({
    select: {
      countId: true,
      id: true,
      ingredient: true,
      dish: {
        select: {
          countId: true,
          id: true,
          title: true
        }
      }
    }
  })
  res.status(200).json(get_ingredients)
}