import React from 'react'

interface TypeProps {
  setIsOpen: any
}

const PublishButton: React.FC<TypeProps> = ({ setIsOpen }) => {
  return (
    <div className="flex flex-row items-center w-full space-x-1">
      <button
        className="flex justify-center w-full p-4 text-sm border border-black-matt border-opacity-10 hover:border-light-gray transition ease-in-out duration-200 outline-none"
        type="button"
        onClick={() => {
          setIsOpen(false)
        }}
      >
        Cancel
      </button>
      <button
        className="flex justify-center w-full p-4 text-sm text-white border border-black-matt border-opacity-10 bg-dark-gray hover:bg-opacity-80 transition ease-in-out duration-200 outline-none"
        type="button"
        onClick={() => {
          console.log('You clicked add button')
        }}
      >
        Publish
      </button>
    </div>
  )
}

export default PublishButton