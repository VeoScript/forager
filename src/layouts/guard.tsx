import React from 'react'

interface TypeProps {
  children: any
}

const Guard: React.FC<TypeProps> = ({ children }) => {  
  return (
    <div className="font-poppins flex flex-col items-center w-full max-w-full h-screen overflow-hidden cursor-default text-black-dim bg-ghost-white">
      <div className="flex flex-col items-center justify-start md:justify-center w-full max-w-5xl h-full p-5 md:p-0">
        <div className="flex justify-center w-full">
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 py-5">
        <span className="font-normal text-xs">© { new Date().getFullYear() } FORAGER FROM VOIDEV</span>
      </div>
    </div>
  )
}

export default Guard