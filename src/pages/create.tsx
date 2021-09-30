import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'
import PostCard from '~/components/Create/PostCard'

const Create: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create | Forager</title>
      </Head>
      <Layout>
        <div className="flex w-full h-full space-x-5">
          <PostCard />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Create