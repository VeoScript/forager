import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Forager</title>
      </Head>
      <div className="font-poppins flex flex-row items-center justify-center w-full h-screen">
        <h1 className="font-bold text-2xl">Welcome to Forager</h1>
      </div>
    </React.Fragment>
  )
}

export default Home