import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import withSession from '~/lib/Session'
import prisma from '~/lib/Prisma'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'

interface TypeProps {
  host: any
  ingredients: any
}

const Explore: NextPage<TypeProps> = ({ host, ingredients }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Explore | Forager</title>
      </Head>
      <Layout
        host={host}
        ingredients={ingredients}
      >
        <div className="flex flex-row items-center w-full h-full space-x-5">
          Explore Page
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = withSession(async function (context: any) {
  const user = context.req.session.get('user')

  if (!user) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const host = await prisma.users.findFirst({
    where: {
      username: user.username
    }
  })

  const ingredients = await prisma.ingredients.findMany({
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

  return {
    props: {
      host,
      ingredients
    }
  }
})

export default Explore