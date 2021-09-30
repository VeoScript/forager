import React from 'react'
import PublishButton from './PublishButton'
import { RiAddLine } from 'react-icons/ri'

const PostCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-full px-3 py-5 md:p-3 space-x-0 space-y-2 md:space-x-2 md:space-y-0 bg-pure-white border border-black-matt border-opacity-10">
      {/* display create post form controls list */}
      <div className="flex flex-col w-full h-full space-y-2">
        <div className="flex items-center justify-between w-full px-2">
          <h3 className="font-semibold text-base">Create Post</h3>
          <div className="flex md:hidden">
            <PublishButton />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-col md:flex-row items-center w-full space-x-0 space-y-2 md:space-x-2 md:space-y-0">
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray">Food Title</span>
                <span className="text-xs text-red-400 hidden">Required</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray">Category</span>
                <span className="text-xs text-red-400 hidden">Required</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray">Post Description</span>
              <span className="text-xs text-red-400 hidden">Required</span>
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent"
              type="text"
            />
          </div>
          <div className="flex flex-row items-center w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex flex-col w-full space-y-1">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray">Add Ingredient</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
              />
              <span className="text-xs text-red-400 hidden">Required</span>
            </div>
            <button
              className="text-light-gray outline-none pl-3 transition ease-in-out duration-200 hover:scale-90"
              type="button"
              onClick={() => {
                console.log('You clicked add button')
              }}
            >
              <RiAddLine className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden md:block">
            <PublishButton />
          </div>
        </div>
      </div>
      {/* display add ingredients list */}
      <div className="flex flex-col w-full h-full space-y-2">
        <div className="flex items-center w-full px-2">
          <h3 className="font-semibold text-base">List of Ingredients</h3>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray">Ingredient Name</span>
              <span className="text-xs text-red-400 hidden">Required</span>
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent disabled:cursor-default"
              type="text"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard