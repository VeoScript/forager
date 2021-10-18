import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { motion } from 'framer-motion'

const ActivitiesList: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-full overflow-hidden border-0 md:border md:border-black-matt md:border-opacity-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-5 md:pt-5 pb-3 md:pb-5 px-0 md:px-3 space-y-2 md:space-y-0 border-b border-black-matt border-opacity-10">
        <h1 className="font-bold text-sm">ACTIVITIES</h1>
      </div>
      <div className="flex flex-col w-full h-full max-h-[30rem] pb-3 md:pb-0 overflow-y-auto">
        {/* {get_user_bookmarks.length === 0 && (
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex flex-col justify-center items-center w-full h-full py-10 md:py-20 space-y-2"
          >
            <RiBookmarkLine className="w-12 h-12 text-black-matt text-opacity-50" />
            <h1 className="font-normal text-sm text-light-gray">No bookmarks at all, save your first bookmark...</h1>
          </motion.div>
        )}
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
              <Link href={`/${bookmarks.dish.id}`}>
                <a className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-light-gray outline-none">
                  View
                </a>
              </Link>
              <RemoveBookmark
                userId={host.id}
                bookmarkId={bookmarks.id}
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default ActivitiesList