import React from 'react'
import Link from 'next/link'

const Credits: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-sm space-y-0.5 text-light-gray text-opacity-50">
      <div className="flex items-center w-full space-x-1">
        <div className="flex">
          <Link href="/">
            <a className="font-normal text-[11px] hover:underline">
              About
            </a>
          </Link>
        </div>
        <span className="text-[10px]">&bull;</span>
        <div className="flex">
          <Link href="/">
            <a className="font-normal text-[11px] hover:underline">
              Help
            </a>
          </Link>
        </div>
        <span className="text-[10px]">&bull;</span>
        <div className="flex">
          <Link href="/">
            <a className="font-normal text-[11px] hover:underline">
              Privacy
            </a>
          </Link>
        </div>
        <span className="text-[10px]">&bull;</span>
        <div className="flex">
          <Link href="/">
            <a className="font-normal text-[11px] hover:underline">
              Terms
            </a>
          </Link>
        </div>
        <span className="text-[10px]">&bull;</span>
        <div className="flex">
          <Link href="/">
            <a className="font-normal text-[11px] hover:underline">
              Developers
            </a>
          </Link>
        </div>
        <span className="text-[10px]">&bull;</span>
        <div className="flex">
          <Link href="/">
            <a className="font-normal text-[11px] hover:underline">
              Source Code
            </a>
          </Link>
        </div>
      </div>
      <div className="flex w-full">
        <span className="font-normal text-xs">© { new Date().getFullYear() } FORAGER FROM VOIDEV</span>
      </div>
    </div>
  )
}

export default Credits