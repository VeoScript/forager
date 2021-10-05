import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Guard from '~/layouts/guard'
import SignUpComponent from '~/components/Guard/SignUp'

const SignUp: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Account | Forager</title>
      </Head>
      <Guard>
        <div className="flex flex-col items-center w-full max-w-xl">
          <SignUpComponent />
        </div>
      </Guard>
    </React.Fragment>
  )
}

export default SignUp