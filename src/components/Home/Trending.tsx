/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Credits from './Credits'
import CreateModal from '../Create/CreateModal'
import { trending } from '~/mock'

const Trending: React.FC = () => {
  return (
    <div className="relative hidden md:flex flex-col w-full max-w-sm h-full py-6 space-y-3">
      <div className="fixed flex-flex-col w-full max-w-sm space-y-5">
        <div className="flex flex-row items-center justify-between w-full max-w-sm">
          <div className="flex flex-row items-center justify-start space-x-2">
            <Link href="/">
              <a>
                <img
                  className="w-16 h-16 object-cover rounded-full bg-dark-gray bg-opacity-20"
                  src="https://avatars.githubusercontent.com/u/26340308?v=4"
                  alt="profile"
                />
              </a>
            </Link>
            <div className="flex flex-col space-y-0.5">
              <div className="flex flex-col -space-y-1">
                <Link href="/">
                  <a className="font-semibold text-base">Lisa Manoban</a>
                </Link>
                <Link href="/">
                  <a className="font-light text-xs hover:underline">lalalalisa_m</a>
                </Link>
              </div>
              <p className="font-semibold text-xs">
                My Kind Of Bio
              </p>
            </div>
          </div>
          <div className="flex">
            <CreateModal />
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm space-y-3">
          <div className="flex flex-row items-center w-full">
            <div className="flex flex-col w-full">
              <h3 className="font-bold text-lg text-dark-gray">Trending</h3>
              <p className="font-light text-xs text-dark-gray">Trend spices mixed with love.</p>
            </div>
            <div className="flex justify-end w-full">
              <Link href="/">
                <a className="font-normal text-xs hover:underline">See More</a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            {trending.map((trend: any, i: any) => (
              <Link href="/" key={i}>
                <a className="flex flex-row items-center justify-between w-full p-3 border border-black-matt border-opacity-10 hover:bg-light-gray hover:bg-opacity-10">
                  <span className="font-bold text-sm">{ trend.name }</span>
                  <span className="font-normal text-[10px]">{ trend.recipes }</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Credits />
      </div>
    </div>
  )
}

export default Trending