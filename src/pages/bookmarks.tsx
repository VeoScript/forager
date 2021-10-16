/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import withSession from '~/lib/Session'
import prisma from '~/lib/Prisma'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'
import BookmarksList from '~/components/Bookmarks/BookmarksList'

interface TypeProps {
  host: any
  get_bookmarks: any
}

const Bookmarks: NextPage<TypeProps> = ({ host, get_bookmarks }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Bookmarks | Forager</title>
      </Head>
      <Layout host={host}>
        <div className="flex flex-row items-center w-full h-full">
          <BookmarksList
            host={host}
            get_bookmarks={get_bookmarks}
          />
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

  const get_bookmarks = await prisma.bookmarks.findMany({
    where: {
      userId: user.id
    },
    orderBy: [
      {
        countId: 'desc'
      }
    ],
    select: {
      id: true,
      date: true,
      dish: {
        select: {
          id: true,
          title: true,
          category: true,
          ingredients: {
            select: {
              ingredient:true
            }
          },
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  })

  return {
    props: {
      host,
      get_bookmarks
    }
  }
})

export default Bookmarks