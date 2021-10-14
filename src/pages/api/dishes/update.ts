import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const update_ingredient = await prisma.dishes.update({
    where: {
      id: req.body.dishId
    },
    data: {
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      userId: req.body.userId,
      ingredients: {
        update: {
          where: {
            id: req.body.ingredientId
          },
          data: {
            ingredient: req.body.all_ingredients
          }
        }
      }
    }
  })
  res.status(200).json(update_ingredient)
}