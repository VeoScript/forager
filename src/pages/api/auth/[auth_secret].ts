import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { auth_secret } = req.query

  if (auth_secret !== process.env.AUTH_SECRET) {
    res.writeHead(301, {
      Location: "/signin",
    })
    res.end()
  }

  if (req.method !== 'GET') {
    res.status(500).json('GET Method Only')
  } else {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        phone: true,
        email: true,
        username: true,
        password: true
      }
    })
    res.status(200).json(users)
  }
}