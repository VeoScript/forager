/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { RiUser3Line, RiSettings3Line } from 'react-icons/ri'

const ProfileDropdown: React.FC = () => {
  
  const [isDropdown, setIsDropdown] = React.useState(false)

  return (
    <React.Fragment>
      <button
        type="button"
        onClick={() => {
          setIsDropdown(true)
        }}
      >
        <img
          className="w-6 h-6 object-cover rounded-full bg-dark-gray bg-opacity-20 transition ease-in-out duration-200 hover:scale-95"
          src="https://avatars.githubusercontent.com/u/26340308?v=4"
          alt="profile" />
      </button>
      {isDropdown && (
        <React.Fragment>
          <button 
            className={`${isDropdown ? 'z-10 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}
            type="button"
            onClick={() => {
              setIsDropdown(false)
            }} 
          />
          <div className="absolute top-14 z-10 w-full max-w-[11rem] shadow-sm bg-pure-white border border-black-matt border-opacity-10">
            <div className="flex flex-col w-full">
              <Link href="/">
                <a className="flex flex-row items-center w-full px-3 py-2 space-x-2 hover:bg-light-gray hover:bg-opacity-5">
                  <RiUser3Line />
                  <span className="text-xs">Profile</span>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-row items-center w-full px-3 py-2 space-x-2 hover:bg-light-gray hover:bg-opacity-5">
                  <RiSettings3Line />
                  <span className="text-xs">Settings</span>
                </a>
              </Link>
              <Link href="/">
                <a className="flex flex-row items-center w-full px-3 py-2 space-x-2 border-t border-black-matt border-opacity-10 text-red-500 hover:bg-red-500 hover:bg-opacity-10">
                  <span className="text-xs">Log Out</span>
                </a>
              </Link>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default ProfileDropdown