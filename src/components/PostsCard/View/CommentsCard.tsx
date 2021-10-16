import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'
import useSWR from 'swr'
import AutoScroll from '@brianmcallister/react-auto-scroll'
import CommentForm from '~/components/PostsCard/Interactions/CommentForm'
import DeleteComment from '~/components/PostsCard/Interactions/DeleteComment'

interface TypeProps {
  host: any
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

const CommentsCard: React.FC<TypeProps> = ({ host, dishes }) => {

  // use useSWR for realtime data fetching...
  const { data: dish } = useSWR(`/api/dishes/${dishes.id}`, fetcher, {
    refreshInterval: 1000,
    fallbackData: dishes
  })
  
  return (
    <div className="relative flex flex-col w-full h-full space-y-3">
      <div className="relative md:fixed flex flex-col w-full max-w-full md:max-w-sm border border-black-matt border-opacity-10">
        <div className="flex flex-row items-center justify-between w-full p-3 bg-pure-white border-b border-black-matt border-opacity-10">
          <span className="font-bold text-sm">Live Comments</span>
          <span className="font-light text-[10px]">{ dish.comments.length } Comments</span>
        </div>
        <AutoScroll
          className="flex flex-col w-full h-full max-h-[23rem] overflow-y-auto"
          showOption={false}
          scrollBehavior="auto"
        >
          {dish.comments.map((comment: any, i: number) => (
            <div className="flex flex-row items-center justify-between w-full p-3 bg-dark-gray bg-opacity-5 border-b border-black-matt border-opacity-10" key={i}>
              <div className="flex flex-col space-y-1">
                <Link href="/">
                  <a className="font-bold text-xs hover:underline">{ comment.user.name }</a>
                </Link>
                <p className="font-normal text-[11px]">{ comment.comment }</p>
                <span className="font-normal text-[10px] text-light-gray text-opacity-80">
                  <Moment date={ comment.date } fromNow />
                </span>
              </div>
              {host.id === comment.user.id && (
                <DeleteComment
                  host={host}
                  comment={comment}
                />
              )}
            </div>
          ))}
        </AutoScroll>
        <div className="flex flex-row items-center justify-between w-full border-t border-black-matt border-opacity-10">
          <CommentForm
            host={host}
            dishId={dish.id}
          />
        </div>
      </div>
    </div>
  )
}

export default CommentsCard