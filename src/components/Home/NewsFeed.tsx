/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'
import useSWR from 'swr'
import {
  RiHeartLine,
  RiBookmarkLine,
  RiChat1Line,
  RiSendPlane2Line
} from 'react-icons/ri'

interface TypeProps {
  dishes: any
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

const Newsdish: React.FC<TypeProps> = ({ dishes }) => {

  // use useSWR for realtime data fetching...
  const { data: fetchDishes } = useSWR('/api/dishes', fetcher, {
    refreshInterval: 1000,
    fallbackData: dishes
  })

  return (
    <div className="flex flex-col w-full h-full mt-2 space-y-2 md:space-y-3">
      {fetchDishes.map((dish: any, i:any) => {
        // split all ingredients to array...
        const split_ingredients = dish.ingredients[0].ingredient.split(", ")
        return (
          <div className="flex flex-col w-full max-w-full h-auto border border-black-matt border-opacity-10 bg-pure-white transition ease-in-out duration-200 hover:shadow-md" key={i}>
            <div className="flex flex-col md:flex-row items-start md:items-center p-3 justify-between w-full">
              <div className="flex flex-row items-center justify-start space-x-2">
                <Link href="/">
                  <a>
                    <img
                      className="w-10 h-10 object-cover rounded-full bg-dark-gray bg-opacity-20"
                      src={ !dish.user.avatar ? `https://ui-avatars.com/api/?name=${dish.user.name}` : dish.user.avatar }
                      alt="profile"
                    />
                  </a>
                </Link>
                <div className="flex flex-col">
                  <Link href="/">
                    <a className="font-semibold text-sm">{ dish.user.name }</a>
                  </Link>
                  <Link href="/">
                    <a className="font-light text-xs hover:underline">@{ dish.user.username }</a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row items-center justify-end mt-5 md:mt-0">
                <div className="flex flex-col items-start md:items-end w-full">
                  <h3 className="font-semibold text-sm">{ dish.title }</h3>
                  <h6 className="font-light text-xs">{ dish.category }</h6>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full py-5 px-3 space-y-5 border-t border-b border-black-matt border-opacity-10">
              <span className="font-normal text-sm">{ dish.description }</span>
              <span className="font-normal text-[10px]"><Moment date={ dish.date } fromNow /></span>
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
                    <span className="text-[10px] text-light-gray">{ dish.reaction }</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      type="button"
                    >
                      <RiChat1Line />
                    </button>
                    <span className="text-[10px] text-light-gray">{ dish.comments }</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      type="button"
                    >
                      <RiBookmarkLine />
                    </button>
                    <span className="text-[10px] text-light-gray">{ dish.bookmarked }</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full font-bold text-sm">
                  {split_ingredients.map((ingredient: any, i: any) => (
                    <span className="p-3 w-full bg-dark-gray bg-opacity-10 border-b border-black-matt border-opacity-10" key={i}>
                      { ingredient }
                    </span>
                  ))}
                </div>
                {/* <div className="flex flex-col w-full">
                  {dish.commentlist.map((comment: any, i: any) => (
                    <div className="flex flex-col px-3 py-3 bg-ghost-white border-b border-black-matt border-opacity-10" key={i}>
                      <Link href="/">
                        <a className="font-bold text-xs hover:underline">{ comment.name }</a>
                      </Link>
                      <p className="font-normal text-[11px]">{ comment.message }</p>
                      <span className="font-normal text-[10px]">{ comment.date }</span>
                    </div>
                  ))}
                </div> */}
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
        )
      })}
    </div>
  )
}

export default Newsdish