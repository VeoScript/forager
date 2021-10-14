import React from 'react'

interface TypeProps {
  isSubmitting: any
}

const PublishButton: React.FC<TypeProps> = ({ isSubmitting }) => {
  return (
    <div className="flex flex-row items-center w-full space-x-1">
      {!isSubmitting && (
        <button
          className="flex justify-center w-full p-4 text-sm text-pure-white border border-black-matt border-opacity-10 bg-black-matt hover:bg-opacity-90 transition ease-in-out duration-200 outline-none"
          type="submit"
        >
          Publish
        </button>
      )}
      {isSubmitting && (
        <div className="flex justify-center w-full p-4 text-sm text-pure-white border border-black-matt border-opacity-10 bg-black-matt hover:bg-opacity-90 transition ease-in-out duration-200 outline-none">
          Loading...
        </div>
      )}
    </div>
  )
}

export default PublishButton