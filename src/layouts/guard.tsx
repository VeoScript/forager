import React from 'react'

interface TypeProps {
  children: any
}

const Guard: React.FC<TypeProps> = ({ children }) => {  
  return (
    <div className="font-poppins flex flex-col items-center w-full max-w-full h-screen cursor-default text-black-dim bg-ghost-white">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl h-full p-5 md:p-0">
        <div className="flex justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Guard