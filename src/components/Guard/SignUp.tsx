import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Spinner from '~/utils/Spinner'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import useSWR from 'swr'

interface FormData {
  name: string
  username: string
  phone: string
  email: string
  password: string
  repassword: string
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

const SignUpComponent: React.FC = () => {

  const { data: users } = useSWR('/api/auth/users', fetcher, {
    refreshInterval: 1000
  })

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  async function onSignUp(formData: FormData) {
    const username = formData.username
    const phone = formData.phone
    const email = formData.email
    const password = formData.password
    const repassword = formData.repassword

    const phone_credential = users.some((user: { phone: string }) => user.phone === phone)
    const username_credential = users.some((user: { username: string }) => user.username === username)
    const email_credential = users.some((user: { email: string }) => user.email === email)

    if (username_credential) {
      toast('Username is already exist.',
        {
          icon: '🛡️',
          style: {
            borderRadius: '10px',
            background: '#222',
            color: '#fff',
          },
        }
      )
      return
    }

    if (phone_credential) {
      toast('The phone number is already exist.',
        {
          icon: '🛡️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      )
      return
    }

    if (email_credential) {
      toast('Email is already exist.',
        {
          icon: '🛡️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      )
      return
    }

    if (password !== repassword) {
      toast('Password not matched, try again.',
        {
          icon: '🛡️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      )
      return
    }

    await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    reset()
    Router.replace('/signin')
  }

  return (
    <div className="relative flex flex-col items-center w-full h-auto">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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
            <span className="font-semibold text-sm">CREATE ACCOUNT</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSignUp)} className="flex flex-col items-center w-full space-y-2">
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray text-opacity-80">Name</span>
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center w-full space-x-0 space-y-2 md:space-x-2 md:space-y-0">
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray text-opacity-80">Phone</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
                {...register("phone", { required: true, pattern: /\d+/ })}
              />
            </div>
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray text-opacity-80">Username</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
                {...register("username", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray text-opacity-80">Email</span>
              {errors.email && <span className="text-[11px] text-red-500">Invalid Email</span>}
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent"
              type="text"
              {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center w-full space-x-0 space-y-2 md:space-x-2 md:space-y-0">
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray text-opacity-80">Create Password</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="password"
                {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/ })}
              />
            </div>
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-pure-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray text-opacity-80">Re-type Password</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="password"
                {...register("repassword", { required: true })}
              />
            </div>
          </div>
          <div className="flex w-full px-5 text-xs">
            {errors.password && 
              <ul className="text-green-500 list-disc">
                <li>At least 1 alphabet</li>
                <li>At least 1 digit</li>
                <li>Contains no space</li>
                <li>Optional special characters e.g. @$!%*#?&^_-</li>
                <li>Minimum 8 characters long</li>
              </ul>
            }
          </div>
          {!isSubmitting && (
            <button
              className="flex justify-center w-full p-4 text-sm text-pure-white border border-black-matt border-opacity-10 bg-black-matt hover:bg-opacity-90 transition ease-in-out duration-200 outline-none"
              type="submit"
            >
              Sign Up
            </button>
          )}
          {isSubmitting && (
            <div className="flex justify-center w-full p-4 text-sm text-pure-white border border-black-matt border-opacity-10 bg-black-matt hover:bg-opacity-90 transition ease-in-out duration-200 outline-none">
              Loading...
            </div>
          )}
          <div className="flex items-center justify-center w-full">
            <Link href="/signin">
              <a className="py-1 font-normal text-xs text-black-matt hover:underline">Go back to Sign in</a>  
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default SignUpComponent