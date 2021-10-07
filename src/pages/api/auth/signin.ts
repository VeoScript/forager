import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSession, Session } from 'next-iron-session'
import prisma from '~/lib/Prisma'
type NextIronRequest = NextApiRequest & { session: Session }

async function handler(
  req: NextIronRequest,
  res: NextApiResponse,
): Promise<void> {
  // get user from prisma
  const findUser = await prisma.users.findMany({
    where: {
      email: req.body.email
    },
    select: {
      id: true,
      username: true
    }
  })
  const getId = findUser[0].id
  const getUsername = findUser[0].username
  // get user from database then:
  req.session.set('user', {
    id: getId,
    username: getUsername,
    admin: true
  })
  await req.session.save()
  res.send('Logged in')
}

export default withIronSession(handler, {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'forager',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
})