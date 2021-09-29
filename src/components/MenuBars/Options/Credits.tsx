import React from 'react'
import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const Credits: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex w-full px-5 py-3 bg-light-gray bg-opacity-5 border-b border-black-matt border-opacity-10">
        <h3 className="font-semibold text-xs uppercase">Credits</h3>
      </div>
      <div className="flex flex-col w-full">
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <h1 className="text-[13px]">About</h1>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Help</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Privacy</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Terms</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Developers</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Source Code</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
      </div>
      <div className="flex w-full px-5 py-3">
        <span className="font-normal text-xs text-light-gray text-opacity-50">© { new Date().getFullYear() } FORAGER FROM VOIDEV</span>
      </div>
    </React.Fragment>
  )
}

export default Credits