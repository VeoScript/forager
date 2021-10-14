import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { RiSearchLine } from 'react-icons/ri'

interface TypeProps {
  host: any
  get_bookmarks: any
}

interface RemoveBookmarkTypes {
  userId: any
  bookmarkId: any
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
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-5 pb-3 px-0 md:px-3 space-y-2 md:space-y-0 border-b border-black-matt border-opacity-10">
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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full p-0 md:p-3 border-b border-black-matt border-opacity-10" key={i}>
            <div className="flex flex-col w-full max-w-full md:max-w-xs p-3 md:p-0 border-b md:border-0 border-black-matt border-opacity-10">
              <h3 className="font-bold text-sm">{ bookmarks.dish.title }</h3>
              <h5 className="font-light text-xs">{ bookmarks.dish.category }</h5>
              <span className="font-normal text-[10px] mt-0 md:mt-1">{ bookmarks.dish.user.name }</span>
            </div>
            <div className="flex flex-col items-start w-full max-w-full px-3 md:px-0 py-3 md:py-3">
              <p className="font-medium text-sm">{ bookmarks.dish.ingredients[0].ingredient }</p>
            </div>
            <div className="flex flex-row justify-start md:justify-end w-full max-w-xs px-3 md:px-0 py-3 md:py-0">
              <button
                className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-light-gray outline-none"
                type="button"
              >
                View
              </button>
              <RemoveBookmark
                userId={host.id}
                bookmarkId={bookmarks.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Delete Comment Function (for dynamic form-controls in each posts)
const RemoveBookmark: React.FC<RemoveBookmarkTypes> = ({ userId, bookmarkId }) => {
  const [deleteIsOpen, setDeleteIsOpen] = React.useState(false)
  return (
    <React.Fragment>
      <button
        className="flex px-3 py-2 ml-1 text-xs border border-black-matt border-opacity-10 hover:border-red-500 hover:text-red-500 outline-none"
        type="button"
        onClick={() => setDeleteIsOpen(true)}
      >
        Remove
      </button>
      {deleteIsOpen && (
        <React.Fragment>
          <button 
            className={`${deleteIsOpen ? 'z-10 block fixed inset-0 left-0 w-full h-full overflow-hidden bg-black-matt bg-opacity-50 cursor-default focus:outline-none' : 'hidden'}`}
            type="button"
            onClick={() => {
              setDeleteIsOpen(false)
            }} 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center align-middle z-10 w-full max-w-sm shadow-sm bg-pure-white border border-black-matt border-opacity-10">
              <div className="flex flex-col w-full p-3">
                <div className="flex w-full px-3 py-2">
                  <span className="font-bold text-sm">Remove Bookmark</span>
                </div>
                <div className="flex w-full px-3 py-1">
                  <span className="font-normal text-xs">
                    Remove this bookmark permanently?
                  </span>
                </div>
                <div className="flex items-center justify-end w-full space-x-1 px-3 py-2">
                  <button
                    className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-light-gray outline-none"
                    type="button"
                    onClick={() => setDeleteIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-red-500 hover:text-red-500 outline-none"
                    type="button"
                    onClick={async () => {
                      await fetch('/api/bookmarks/delete', {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ userId, bookmarkId })
                      })
                      setDeleteIsOpen(false)
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default BookmarksList