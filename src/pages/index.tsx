import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'
import NewsFeed from '~/components/Home/NewsFeed'
import Trending from '~/components/Home/Trending'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Forager</title>
      </Head>
      <Layout>
        <div className="flex flex-row items-center w-full h-full space-x-5">
          <NewsFeed />
          <Trending />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Home