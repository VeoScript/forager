import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  RiSearchLine,
  RiAddBoxLine,
  RiHome5Line,
  RiHome5Fill,
  RiBookmarkLine,
  RiBookmarkFill,
  RiHeartLine,
  RiHeartFill
} from 'react-icons/ri'

const BottomBar: React.FC = () => {

  const router = useRouter()

  return (
    <div className="fixed md:hidden bottom-0 z-10 flex flex-row items-center justify-between w-full max-w-full px-5 py-3 bg-pure-white border-t border-black-matt border-opacity-10">
      <Link href="/">
        <a className="font-light">
          {router.pathname === '/' && (
            <RiHome5Fill className="w-7 h-7" />
          )}
          {router.pathname !== '/' && (
            <RiHome5Line className="w-7 h-7" />
          )}
        </a>
      </Link>
      <Link href="/explore">
        <a className="font-light">
          <RiSearchLine className="w-7 h-7" />
        </a>
      </Link>
      <button
        className="font-light"
        type="button"
        onClick={() => {
          console.log('Create Post Button')
        }}
      >
        <RiAddBoxLine className="w-7 h-7" />
      </button>
      <Link href="/activities">
        <a className="font-light">
          {router.pathname === '/activities' && (
            <RiHeartFill className="w-7 h-7" />
          )}
          {router.pathname !== '/activities' && (
            <RiHeartLine className="w-7 h-7" />
          )}
        </a>
      </Link>
      <Link href="/bookmarks">
        <a className="font-light">
          {router.pathname === '/bookmarks' && (
            <RiBookmarkFill className="w-7 h-7" />
          )}
          {router.pathname !== '/bookmarks' && (
            <RiBookmarkLine className="w-7 h-7" />
          )}
        </a>
      </Link>
    </div>
  )
}

export default BottomBar