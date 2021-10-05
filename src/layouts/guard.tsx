import React from 'react'
import Credits from '~/components/Home/Credits'

interface TypeProps {
  children: any
}

const Guard: React.FC<TypeProps> = ({ children }) => {  
  return (
    <div className="font-poppins flex flex-col items-center w-full max-w-full h-screen overflow-hidden cursor-default text-black-dim bg-ghost-white">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl h-full px-5">
        <div className="flex justify-center w-full">
          {children}
        </div>
        <div className="fixed bottom-0 p-3">
          <span className="font-normal text-xs">© { new Date().getFullYear() } FORAGER FROM VOIDEV</span>
        </div>
      </div>
    </div>
  )
}

export default Guard