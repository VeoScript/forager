import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const create_ingredient = await prisma.dishes.create({
    data: {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      userId: req.body.userId,
      date: String(new Date()),
      ingredients: {
        create: {
          ingredient: req.body.all_ingredients
        }
      }
    }
  })
  res.status(200).json(create_ingredient)
}