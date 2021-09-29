import React from 'react'
import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const Credits: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex w-full px-5 py-3 bg-light-gray bg-opacity-5 border-b border-black-matt border-opacity-10">
        <h3 className="font-normal text-sm uppercase">Credits</h3>
      </div>
      <div className="flex flex-col w-full">
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <h1 className="text-sm">About</h1>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-sm">Help</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-sm">Privacy</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-sm">Terms</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-sm">Developers</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-sm">Source Code</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Credits