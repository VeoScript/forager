/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { trending } from '~/mock'

const Trending: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full max-w-sm h-full py-6 space-y-3">
      <div className="fixed z-0 flex-flex-col w-full space-y-5">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center justify-start space-x-2">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src="https://avatars.githubusercontent.com/u/26340308?v=4"
              alt="profile"
            />
            <div className="flex flex-col w-full space-y-0.5">
              <div className="flex flex-col -space-y-1">
                <Link href="/">
                  <a className="font-semibold text-base hover:underline">Lisa Manoban</a>
                </Link>
                <h6 className="ffont-light text-xs">lalalalisa_m</h6>
              </div>
              <p className="font-semibold text-sm">
                My Kind Of Bio
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm space-y-3">
          <div className="flex flex-col w-full">
            <h3 className="font-bold text-lg text-dark-gray">Trending</h3>
            <p className="font-light text-xs text-dark-gray">Trend spices mixed with love.</p>
          </div>
          <div className="flex flex-col w-full space-y-1">
            {trending.map((trend: any, i: any) => (
              <div className="flex flex-row items-center justify-between w-full p-3 border border-black-matt border-opacity-10" key={i}>
                <span className="font-bold text-sm">{ trend.name }</span>
                <span className="font-normal text-[10px]">{ trend.recipes }</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending