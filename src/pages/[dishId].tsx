import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import withSession from '~/lib/Session'
import prisma from '~/lib/Prisma'
import React from 'react'
import Head from 'next/head'
import Layout from '~/layouts/default'
import PostCard from '~/components/PostsCard/View/PostCard'
import CommentsCard from '~/components/PostsCard/View/CommentsCard'

interface TypeProps {
  host: any
  dishes: any
}

const PostDisplay: NextPage<TypeProps> = ({ host, dishes }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{ dishes.title } | Forager</title>
      </Head>
      <Layout host={host}>
        <div className="flex flex-col md:flex-row items-start w-full h-full space-y-0 space-x-0 md:space-y-0 md:space-x-2">
          <div className="flex flex-row w-full max-w-full">
            <PostCard
              host={host}
              dishes={dishes}
            />
          </div>
          <div className="flex flex-col w-full max-w-full md:max-w-sm pb-3">
            <CommentsCard
              host={host}
              dishes={dishes}
            />
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = withSession(async function (context: any) {
  const user = context.req.session.get('user')
  const { dishId } = context.query

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

  const dishes = await prisma.dishes.findFirst({
    where: {
      id : dishId
    },
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
            countId: 'asc'
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

export default PostDisplay