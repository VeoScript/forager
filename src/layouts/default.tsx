import React from 'react'
import Navbar from '~/components/Navbar'

interface TypeProps {
  children: any
}

const Layout: React.FC<TypeProps> = ({ children }) => {
  return (
    <div className="font-poppins flex flex-col items-center w-full max-w-full h-screen overflow-y-auto cursor-default text-black-dim bg-ghost-white">
      <div className="flex flex-col items-center w-full h-full">
        <div className="relative flex w-full">
          <Navbar />
        </div>
        <div className="flex flex-col items-center w-full max-w-5xl h-screen py-16">
          <div className="flex w-full pb-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout