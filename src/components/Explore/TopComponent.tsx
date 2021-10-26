import React from 'react'

interface TypeProps {
  ingredient: any
}

const TopComponent: React.FC<TypeProps> = ({ ingredient }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-xl pt-5 md:pt-3 pb-3 md:pb-3 px-0 md:px-3 space-y-2 md:space-y-0 border-b border-black-matt border-opacity-10">
      <h1 className="font-bold text-sm">EXPLORE</h1>
      <div className="flex items-center text-xs space-x-1">
        <span className="font-normal">Possible dishes of</span>
        <span className="font-bold">{ ingredient }</span>
      </div>
    </div>
  )
}

export default TopComponent