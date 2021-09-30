/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { newsfeed } from '~/mock'
import { RiHeartLine, RiBookmarkLine, RiChat1Line, RiSendPlane2Line } from 'react-icons/ri'

const NewsFeed: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full mt-2 space-y-2 md:space-y-3">
      {newsfeed.map((feed: any, i:any) => (
        <div className="flex flex-col w-full max-w-full h-auto border border-black-matt border-opacity-10 bg-pure-white transition ease-in-out duration-200 hover:shadow-md" key={i}>
          <div className="flex flex-row items-center p-3 justify-between w-full">
            <div className="flex flex-row items-center justify-start space-x-2">
              <Link href="/">
                <a>
                  <img
                    className="w-10 h-10 object-cover rounded-full bg-dark-gray bg-opacity-20"
                    src={ feed.avatar }
                    alt="profile"
                  />
                </a>
              </Link>
              <div className="flex flex-col">
                <Link href="/">
                  <a className="font-semibold text-sm">{ feed.name }</a>
                </Link>
                <Link href="/">
                  <a className="font-light text-xs hover:underline">{ feed.username }</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end">
              <div className="flex flex-col items-end w-full">
                <h3 className="font-semibold text-sm">{ feed.food }</h3>
                <h6 className="font-light text-xs">{ feed.tag }</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-3 border-b border-black-matt border-opacity-10">
            <span className="font-normal text-sm pt-2 pb-5">{ feed.description }</span>
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
                  <span className="text-[10px] text-light-gray">{ feed.reaction }</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                  >
                    <RiBookmarkLine />
                  </button>
                  <span className="text-[10px] text-light-gray">{ feed.bookmarked }</span>
                </div>
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                  >
                    <RiChat1Line />
                  </button>
                  <span className="text-[10px] text-light-gray">{ feed.comments }</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full font-bold text-sm">
                {feed.ingredients.map((ingredient: any, i: any) => (
                  <span className="p-3 w-full bg-dark-gray bg-opacity-10 border-b border-black-matt border-opacity-10" key={i}>
                    { ingredient.name }
                  </span>
                ))}
              </div>
              <div className="flex flex-col w-full">
                {feed.commentlist.map((comment: any, i: any) => (
                  <div className="flex flex-col px-3 py-3 bg-ghost-white border-b border-black-matt border-opacity-10" key={i}>
                    <Link href="/">
                      <a className="font-bold text-xs hover:underline">{ comment.name }</a>
                    </Link>
                    <p className="font-normal text-[11px]">{ comment.message }</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center w-full py-3 bg-pure-white border-b border-black-matt border-opacity-10">
                  <input
                    className="font-normal text-xs w-full px-5 outline-none bg-transparent"
                    type="text"
                    placeholder="Add a comment..."
                  />
                  <button
                    className="flex text-xl px-3 border-l border-black-matt border-opacity-10"
                    type="button"
                  >
                    <RiSendPlane2Line />
                  </button>
                </div>
                <div className="flex justify-center w-full py-2">
                  <Link href="/">
                    <a className="font-normal text-xs hover:underline">See more comments...</a>
                  </Link>
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