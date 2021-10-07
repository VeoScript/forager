import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head'
import Guard from '~/layouts/guard'
import SignInComponent from '~/components/Guard/SignIn'
import withSession from '~/lib/Session'

const SignIn: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sign In | Forager</title>
      </Head>
      <Guard>
        <motion.div
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex flex-col items-center w-full max-w-lg h-full"
        >
          <SignInComponent />
        </motion.div>
      </Guard>
    </React.Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = withSession(async function (context: any) {
  const user = context.req.session.get('user')

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
})

export default SignIn