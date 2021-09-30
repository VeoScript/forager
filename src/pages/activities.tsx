import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '~/layouts/default'

const Activities: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Activities | Forager</title>
      </Head>
      <Layout>
        <div className="flex flex-row items-center w-full h-full space-x-5">
          Activities Page
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Activities