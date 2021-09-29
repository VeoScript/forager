import React from 'react'
import Link from 'next/link'
import {
  RiSearchLine,
  RiHome5Line,
  RiHeartLine,
  RiBookmarkLine,
  RiAddBoxLine
} from 'react-icons/ri'

const BottomBar: React.FC = () => {
  return (
    <div className="fixed md:hidden bottom-0 z-10 flex flex-row items-center justify-between w-full max-w-full px-5 py-3 bg-pure-white border-t border-black-matt border-opacity-10">
      <Link href="/">
        <a className="font-light">
          <RiHome5Line className="w-7 h-7" />
        </a>
      </Link>
      <Link href="/">
        <a className="font-light">
          <RiSearchLine className="w-7 h-7" />
        </a>
      </Link>
      <Link href="/">
        <a className="font-light">
          <RiAddBoxLine className="w-7 h-7" />
        </a>
      </Link>
      <Link href="/">
        <a className="font-light">
          <RiHeartLine className="w-7 h-7" />
        </a>
      </Link>
      <Link href="/">
        <a className="font-light">
          <RiBookmarkLine className="w-7 h-7" />
        </a>
      </Link>
    </div>
  )
}

export default BottomBar