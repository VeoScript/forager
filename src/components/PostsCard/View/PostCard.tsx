/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Moment from 'react-moment'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import PostDropdown from '~/components/MenuBars/Dropdown/PostDropdown'
import ReactionButton from '~/components/PostsCard/Interactions/ReactionButton'
import BookmarkButton from '~/components/PostsCard/Interactions/BookmarkButton'
import { RiChat1Line } from 'react-icons/ri'

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

const PostCard: React.FC<TypeProps> = ({ host, dishes }) => {

  const router = useRouter()

  // use useSWR for realtime data fetching...
  const { data: dish } = useSWR(`/api/dishes/${dishes.id}`, fetcher, {
    refreshInterval: 1000,
    fallbackData: dishes
  })

  // split all ingredients to array...
  const split_ingredients = dish.ingredients[0].ingredient.split(", ")

  // fetch only 3 comments in each posts...
  const shortened_comments = dish.comments.slice(0, 3)

  return (
    <div className="flex flex-col w-full max-w-full border border-black-matt border-opacity-10 bg-pure-white transition ease-in-out duration-200 hover:shadow-md">
      <div className="flex flex-col md:flex-row items-start md:items-center p-3 justify-between w-full">
        <div className="flex flex-row items-center justify-start space-x-2">
          <img
            className="w-10 h-10 object-cover rounded-full bg-dark-gray bg-opacity-20"
            src={ !dish.user.avatar ? `https://ui-avatars.com/api/?name=${dish.user.name}` : dish.user.avatar }
            alt="profile"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{ dish.user.name }</span>
            <span className="font-light text-xs hover:underline">@{ dish.user.username }</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end mt-5 md:mt-0">
          {router.pathname === `/explore/[ingredient]` && (
            <Link href={`/${dish.id}`}>
              <a className="flex flex-col items-start md:items-end w-full">
                <h3 className="font-semibold text-sm hover:underline">{ dish.title }</h3>
                <h6 className="font-light text-xs">{ dish.category }</h6>
              </a>
            </Link>
          )}
          {router.pathname !== `/explore/[ingredient]` && (
            <div className="flex flex-col items-start md:items-end w-full">
              <h3 className="font-semibold text-sm">{ dish.title }</h3>
              <h6 className="font-light text-xs">{ dish.category }</h6>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-start justify-between w-full py-5 px-3 border-t border-b border-black-matt border-opacity-10">
        <div className="flex flex-col w-full space-y-5">
          <span className="font-normal text-sm">{ dish.description }</span>
          <span className="font-normal text-[10px]"><Moment date={ dish.date } fromNow /></span>
        </div>
        {host.id === dish.user.id && (
          <div className="flex w-10 px-5">
            <PostDropdown
              host={host}
              dish={dish}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center justify-between w-full px-3 py-2">
          <h3 className="font-semibold text-sm text-dark-gray text-opacity-80">Main Ingredients</h3>
          <div className="flex flex-row items-center space-x-2">
            <div className="flex items-center space-x-1">
              <ReactionButton
                host={host}
                dish={dish}
              />
              <span className="text-[10px] text-light-gray">{ dish.likes.length }</span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                type="button"
              >
                <RiChat1Line />
              </button>
              <span className="text-[10px] text-light-gray">{ dish.comments.length }</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookmarkButton
                host={host}
                dish={dish}
              />
              <span className="text-[10px] text-light-gray">{ dish.bookmarks.length }</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full font-bold text-sm">
          {split_ingredients.map((ingredient: any, ingredientCounter: any) => (
            <span className="p-3 w-full bg-dark-gray bg-opacity-10 border-b border-black-matt border-opacity-10" key={ingredientCounter}>
              { ingredient }
            </span>
          ))}
        </div>
        {router.pathname === `/explore/[ingredient]` && (
          <div className="flex justify-center w-full py-2">
            <Link href={`/${dish.id}`}>
              <a className="font-normal text-xs hover:underline">See comments...</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostCard