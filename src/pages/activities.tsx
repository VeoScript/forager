import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import withSession from '~/lib/Session'
import prisma from '~/lib/Prisma'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'
import ActivitiesList from '~/components/Activities/ActivitiesList'

interface TypeProps {
  host: any
}

const Activities: NextPage<TypeProps> = ({ host }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Activities | Forager</title>
      </Head>
      <Layout host={host}>
        <div className="flex flex-row items-center w-full h-full">
          <ActivitiesList />
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

  return {
    props: {
      host
    }
  }
})

export default Activities