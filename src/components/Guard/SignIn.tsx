import React from 'react'
import Link from 'next/link'
import Spinner from '~/utils/Spinner'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface FormData {
  email: string
  password: string
}

const SignInComponent: React.FC = () => {

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

  async function onSignIn(formData: FormData) {
    console.log(formData)
    reset()
  }

  return (
    <div className="relative flex flex-col items-center w-full h-auto">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center h-full"
      >
        <div className="flex flex-col items-center w-full h-auto">
          <h3 className="font-bold text-4xl">FORAGER</h3>
          <h5 className="font-light text-xl">음식이나 식량을 널리 구하는 사람</h5>
          <Spinner />
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col items-center w-full space-y-5"
      >
        <div className="flex flex-col items-center w-full h-auto">
          <h3 className="font-bold text-2xl">FORAGER</h3>
          <h5 className="font-light text-base">음식이나 식량을 널리 구하는 사람</h5>
          <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-1 mt-3">
            <span className="font-semibold text-sm">SIGN IN</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSignIn)} className="flex flex-col items-center w-full space-y-2">
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray text-opacity-80">Email</span>
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent"
              type="text"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray text-opacity-80">Password</span>
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <button
            className="flex justify-center w-full p-4 text-sm text-pure-white border border-black-matt border-opacity-10 bg-black-matt hover:bg-opacity-90 transition ease-in-out duration-200 outline-none"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex items-center justify-between w-full">
            <Link href="/signup">
              <a className="font-normal text-xs text-black-matt hover:underline">Create Account</a>  
            </Link>
            <Link href="/forgot-password">
              <a className="font-normal text-xs text-black-matt hover:underline">Forgot Password?</a>  
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default SignInComponent