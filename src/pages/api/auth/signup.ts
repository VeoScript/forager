import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '~/lib/Prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(500).json('POST Method Only')
  } else {
    const {
      name,
      username,
      phone,
      email,
      password: rawPassword
    } = req.body
  
    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash(rawPassword, salt)
  
    const signup = await prisma.users.create({
      data: {
        name: name,
        username: username,
        phone: phone,
        email: email,
        password: password
      }
    })
    res.status(200).json(signup)
  }
}
