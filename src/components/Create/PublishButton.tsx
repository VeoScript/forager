import React from 'react'

interface TypeProps {
  append: any
  setIsOpen: any
}

const PublishButton: React.FC<TypeProps> = ({ append, setIsOpen }) => {
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
        className="flex justify-center w-full p-4 text-sm border border-black-matt border-opacity-10 hover:border-light-gray transition ease-in-out duration-200 outline-none"
        type="button"
        onClick={() => append({ value: "" })}
      >
        Add
      </button>
      <button
        className="flex justify-center w-full p-4 text-sm text-pure-white border border-black-matt border-opacity-10 bg-black-matt hover:bg-opacity-90 transition ease-in-out duration-200 outline-none"
        type="submit"
      >
        Publish
      </button>
    </div>
  )
}

export default PublishButton