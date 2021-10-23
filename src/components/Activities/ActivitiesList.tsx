import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { RiHeart2Fill, RiChat1Fill } from 'react-icons/ri'

interface TypeProps {
  host: any
  activities: any
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

const ActivitiesList: React.FC<TypeProps> = ({ host, activities }) => {

  const { data: get_user_activities } = useSWR(`/api/activities/${host.id}`, fetcher, {
    refreshInterval: 1000,
    fallbackData: activities
  })

  return (
    <div className="flex flex-col w-full h-full max-h-full overflow-hidden border-0 md:border md:border-black-matt md:border-opacity-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-5 md:pt-5 pb-3 md:pb-5 px-0 md:px-3 space-y-2 md:space-y-0 border-b border-black-matt border-opacity-10">
        <h1 className="font-bold text-sm">ACTIVITIES</h1>
      </div>
      <div className="flex flex-col w-full h-full max-h-[30rem] pb-3 md:pb-0 overflow-y-auto">
        {get_user_activities.length === 0 && (
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="flex flex-col justify-center items-center w-full h-full py-10 md:py-20 space-y-2"
          >
            {/* <RiBookmarkLine className="w-12 h-12 text-black-matt text-opacity-50" /> */}
            <h1 className="font-normal text-sm text-light-gray">No activities at all...</h1>
          </motion.div>
        )}
        {get_user_activities.map((activity: any, i: number) => (
          // activity.sender === host.username || activity.recipient === activity.sender
          <React.Fragment key={i}>
            {(activity.sender === host.username || activity.recipient === activity.sender) && (
              <div className={`${activity.recipient === host.username ? 'hidden' : 'flex'} flex-col w-full px-3 py-5 border-b border-black border-opacity-10`}>
                <div className="flex flex-row items-center w-full text-sm space-x-1">
                  <div className="flex mr-1">
                    {activity.notificationtype === 'Like' && (
                      <RiHeart2Fill className="w-5 h-5 text-red-500" />
                    )}
                    {activity.notificationtype === 'Comment' && (
                      <RiChat1Fill className="w-5 h-5 text-light-gray" />
                    )}
                  </div>
                  <div className="space-x-1">
                    <span className="font-bold hover:underline">{ activity.recipient === host.username ? 'You' : activity.recipient }</span>
                    <span>{ activity.message }</span>
                    <Link href={`/${activity.dish.id}`}>
                      <a className="font-bold hover:underline">{ activity.dish.title }</a>
                    </Link>.
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ActivitiesList