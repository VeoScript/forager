/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { RiSearchLine, RiHome5Line, RiCompass3Line, RiBookmarkLine } from 'react-icons/ri'

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 z-10 flex flex-row items-center justify-center w-full max-w-full py-3 bg-pure-white border-b border-black-matt border-opacity-10">
      <div className="flex flex-row items-center justify-between w-full max-w-5xl">
        <div className="flex justify-start w-full">
          <h3 className="font-bold text-base">FORAGER</h3>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex items-center w-full max-w-[15rem] px-2 bg-light-gray bg-opacity-5 border border-black-matt border-opacity-10 focus-within:border-light-gray">
            <RiSearchLine className="text-black-matt text-opacity-50" />
            <input
              className="font-normal text-xs w-full p-2 outline-none bg-transparent"
              type="text"
              placeholder="Search" />
          </div>
        </div>
        <div className="flex justify-end w-full space-x-3">
          <Link href="/">
            <a className="font-light">
              <RiHome5Line className="w-7 h-7" />
            </a>
          </Link>
          <Link href="/">
            <a className="font-light">
              <RiCompass3Line className="w-7 h-7" />
            </a>
          </Link>
          <Link href="/">
            <a className="font-light">
              <RiBookmarkLine className="w-7 h-7" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <img
                className="w-7 h-7 object-cover rounded-full"
                src="https://avatars.githubusercontent.com/u/26340308?v=4"
                alt="profile" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar