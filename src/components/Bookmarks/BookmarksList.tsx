import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { RiSearchLine } from 'react-icons/ri'

interface TypeProps {
  host: any
  get_bookmarks: any
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

const BookmarksList: React.FC<TypeProps> = ({ host, get_bookmarks }) => {

  const { data: get_user_bookmarks } = useSWR(`/api/bookmarks/${host.id}`, fetcher, {
    refreshInterval: 1000,
    fallbackData: get_bookmarks
  })

  return (
    <div className="flex flex-col w-full h-full max-h-full overflow-hidden border border-black-matt border-opacity-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-3 space-y-2 md:space-y-0 border-b border-black-matt border-opacity-10">
        <h1 className="font-bold text-sm">BOOKMARKS</h1>
        <div className="flex items-center w-full max-w-[20rem] px-2 bg-light-gray bg-opacity-5 border border-black-matt border-opacity-10 focus-within:border-light-gray">
          <RiSearchLine className="text-black-matt text-opacity-50" />
          <input
            className="font-normal text-xs w-full p-2 outline-none bg-transparent"
            type="text"
            placeholder="Search Dish Name" />
        </div>
      </div>
      <div className="flex flex-col w-full h-full max-h-[30rem] pb-3 md:pb-0 overflow-y-auto">
        {get_user_bookmarks.map((bookmarks: any, i: number) => (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full p-0 md:p-3 space-y-3 border-b border-black-matt border-opacity-10" key={i}>
            <div className="flex flex-col w-full max-w-full md:max-w-xs p-3 md:p-0 border-b md:border-0 border-black-matt border-opacity-10">
              <h3 className="font-bold text-sm">{ bookmarks.dish.title }</h3>
              <h5 className="font-light text-xs">{ bookmarks.dish.category }</h5>
              <span className="font-normal text-[10px] mt-0 md:mt-1">{ bookmarks.dish.user.name }</span>
            </div>
            <div className="flex flex-col items-start w-full max-w-full px-3 py-0 md:px-0">
              <p className="font-medium text-sm">{ bookmarks.dish.ingredients[0].ingredient }</p>
            </div>
            <div className="flex flex-row justify-start md:justify-end w-full max-w-xs px-3 pb-2 md:px-0 space-x-1">
              <button
                className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-light-gray outline-none"
                type="button"
              >
                View
              </button>
              <button
                className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-red-500 hover:text-red-500 outline-none"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookmarksList