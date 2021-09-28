/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { newsfeed } from '~/mock'
import { RiHeartLine, RiBookmarkLine } from 'react-icons/ri'

const NewsFeed: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full mt-2 space-y-3">
      {newsfeed.map((feed: any, i:any) => (
        <div className="flex flex-col w-full max-w-full h-auto border border-black-matt border-opacity-10 bg-pure-white transition ease-in-out duration-200 hover:shadow-md" key={i}>
          <div className="flex flex-row items-center p-3 justify-between w-full">
            <div className="flex flex-row items-center justify-start space-x-2">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src={ feed.avatar }
                alt="profile"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">{ feed.name }</h3>
                <h6 className="font-light text-xs">{ feed.username }</h6>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end">
              <div className="flex flex-col items-end w-full">
                <h3 className="font-semibold text-sm">{ feed.food }</h3>
                <h6 className="font-light text-xs">{ feed.tag }</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-2 space-y-2">
            <div className="flex flex-row items-center justify-between w-full px-3">
              <h3 className="font-semibold text-sm text-dark-gray text-opacity-80">Main Ingredients</h3>
              <div className="flex flex-row items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                  >
                    <RiHeartLine />
                  </button>
                  <span className="text-xs">{ feed.reaction }</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                  >
                    <RiBookmarkLine />
                  </button>
                  <span className="text-xs">{ feed.bookmarked }</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full font-bold text-sm">
                {feed.ingredients.map((ingredient: any, i: any) => (
                  <span className="p-3 w-full bg-light-gray bg-opacity-20 border-b border-black-matt border-opacity-10" key={i}>
                    { ingredient.name }
                  </span>
                ))}
              </div>
              <div className="flex flex-row items-center w-full">
                <div className="flex items-center w-full px-2 bg-pure-white">
                  <input
                    className="font-normal text-xs w-full p-3 outline-none bg-transparent"
                    type="text"
                    placeholder="Add a comment..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsFeed