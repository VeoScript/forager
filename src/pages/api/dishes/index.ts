import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const get_dishes = await prisma.dishes.findMany()
  res.status(200).json(get_dishes)
}