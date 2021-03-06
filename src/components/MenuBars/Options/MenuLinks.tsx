import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { RiArrowRightSLine } from 'react-icons/ri'

interface TypeProps {
  setMenuOpen: any
}

const MenuLinks: React.FC<TypeProps> = ({ setMenuOpen }) => {
  return (
    <React.Fragment>
      <div className="flex w-full px-5 py-3 bg-light-gray bg-opacity-5 border-b border-black-matt border-opacity-10">
        <h3 className="font-semibold text-xs uppercase">Menu</h3>
      </div>
      <div className="flex flex-col w-full">
        <Link href="/">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <h1 className="text-[13px]">Home</h1>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/explore">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Explore</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/activities">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Activity</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/bookmarks">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Bookmarks</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <button
          className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-red-500 hover:bg-opacity-10"
          type="button"
          onClick={async () => {
            await fetch('/api/auth/signout', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            Router.push('/signin')
          }}
        >
          <span className="text-[13px] text-red-500">Log Out</span>
          <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
        </button>
      </div>
    </React.Fragment>
  )
}

export default MenuLinks