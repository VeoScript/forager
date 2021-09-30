import React from 'react'

const PublishButton: React.FC = () => {
  return (
    <button
      className="flex justify-center w-full px-3 py-2 text-sm text-white bg-dark-gray hover:bg-opacity-80 transition ease-in-out duration-200"
      type="button"
      onClick={() => {
        console.log('You clicked add button')
      }}
    >
      Publish
    </button>
  )
}

export default PublishButton