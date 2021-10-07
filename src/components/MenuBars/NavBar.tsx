/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ProfileDropdown from './Dropdown/ProfileDropdown'
import {
  RiMenu5Fill,
  RiSearchLine,
  RiHome5Line,
  RiHome5Fill,
  RiCompass3Line,
  RiCompass3Fill,
  RiBookmarkLine,
  RiBookmarkFill,
  RiHeartLine,
  RiHeartFill
} from 'react-icons/ri'

interface TypeProps {
  setMenuOpen: any
}

const NavBar: React.FC<TypeProps> = ({ setMenuOpen }) => {

  const router = useRouter()
  
  return (
    <div className="fixed top-0 z-10 flex flex-row items-center justify-center w-full max-w-full px-5 py-3 bg-pure-white border-b border-black-matt border-opacity-10">
      <div className="flex flex-row items-center justify-between w-full max-w-5xl">
        <div className="flex md:hidden w-full">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(true)
            }}
          >
            <RiMenu5Fill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95" />
          </button>
        </div>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/">
            <a className="font-bold text-base">FORAGER</a>
          </Link>
        </div>
        <div className="hidden md:flex justify-center w-full">
          <div className="flex items-center w-full max-w-[15rem] px-2 bg-light-gray bg-opacity-5 border border-black-matt border-opacity-10 focus-within:border-light-gray">
            <RiSearchLine className="text-black-matt text-opacity-50" />
            <input
              className="font-normal text-xs w-full p-2 outline-none bg-transparent"
              type="text"
              placeholder="Search" />
          </div>
        </div>
        <div className="hidden md:flex justify-end w-full space-x-3">
          <Link href="/">
            <a className="font-light">
              {router.pathname === '/' && (
                <RiHome5Fill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/' && (
                <RiHome5Line className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <Link href="/explore">
            <a className="font-light">
              {router.pathname === '/explore' && (
                <RiCompass3Fill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/explore' && (
                <RiCompass3Line className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <Link href="/activities">
            <a className="font-light">
              {router.pathname === '/activities' && (
                <RiHeartFill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/activities' && (
                <RiHeartLine className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="font-light">
              {router.pathname === '/bookmarks' && (
                <RiBookmarkFill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/bookmarks' && (
                <RiBookmarkLine className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <ProfileDropdown />
        </div>
        <div className="flex md:hidden justify-end w-full">
          <Link href="/">
            <a>
              <img
                className="w-6 h-6 object-cover rounded-full bg-dark-gray bg-opacity-30 transition ease-in-out duration-200 hover:scale-95"
                src={`https://ui-avatars.com/api/?name=${'Lisa Manoban'}`}
                alt="profile" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar