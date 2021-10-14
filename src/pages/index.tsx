import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import withSession from '~/lib/Session'
import prisma from '~/lib/Prisma'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'
import NewsFeed from '~/components/Home/NewsFeed'
import Trending from '~/components/Home/Trending'

interface TypeProps {
  host: any
  dishes: any
}

const Home: NextPage<TypeProps> = ({ host, dishes }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Forager</title>
      </Head>
      <Layout host={host}>
        <div className="flex flex-row items-center w-full h-full space-x-5">
          <NewsFeed host={host} dishes={dishes} />
          <Trending host={host} />
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

  const dishes = await prisma.dishes.findMany({
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
            date: 'desc'
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

  return {
    props: {
      host,
      dishes
    }
  }
})

export default Home