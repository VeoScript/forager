import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Guard from '~/layouts/guard'
import SignInComponent from '~/components/Guard/SignIn'

const SignIn: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign In | Forager</title>
      </Head>
      <Guard>
        <div className="flex flex-col items-center w-full max-w-md h-full">
          <SignInComponent />
        </div>
      </Guard>
    </React.Fragment>
  )
}

export default SignIn