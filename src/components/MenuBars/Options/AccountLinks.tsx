import React from 'react'
import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

interface TypeProps {
  setMenuOpen: any
}

const AccountLinks: React.FC<TypeProps> = ({ setMenuOpen }) => {
  return (
    <React.Fragment>
      <div className="flex w-full px-5 py-3 bg-light-gray bg-opacity-5 border-b border-black-matt border-opacity-10">
        <h3 className="font-semibold text-xs uppercase">Account</h3>
      </div>
      <div className="flex flex-col w-full">
        <Link href="/">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <h1 className="text-[13px]">Edit Profile</h1>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center  justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Change Password</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
        <Link href="/">
          <a onClick={() => setMenuOpen(false)} className="flex flex-row items-center  justify-between w-full px-5 py-3 border-b border-black-matt border-opacity-10 hover:border-transparent hover:bg-light-gray hover:bg-opacity-10">
            <span className="text-[13px]">Privacy and Security</span>
            <RiArrowRightSLine className="w-6 h-6 text-light-gray" />
          </a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default AccountLinks