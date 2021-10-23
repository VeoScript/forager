/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import ProfileDropdown from './Dropdown/ProfileDropdown'
import {
  RiMenu5Fill,
  RiSearchLine,
  RiHome5Line,
  RiHome5Fill,
  RiCompass3Line,
  RiCompass3Fill,
  RiBookmarkLine,
  RiBookmarkFill,
  RiHeartLine,
  RiHeartFill
} from 'react-icons/ri'

interface TypeProps {
  host: any
  ingredients: any
  setMenuOpen: any
}

interface SearchComponentTypes {
  host: any
  ingredients: any
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

const NavBar: React.FC<TypeProps> = ({ host, ingredients, setMenuOpen }) => {

  const router = useRouter()
  
  return (
    <div className="fixed top-0 z-10 flex flex-row items-center justify-center w-full max-w-full px-5 py-3 bg-pure-white border-b border-black-matt border-opacity-10">
      <div className="flex flex-row items-center justify-between w-full max-w-5xl">
        <div className="flex md:hidden w-full">
          <button
            type="button"
            onClick={() => {
              setMenuOpen(true)
            }}
          >
            <RiMenu5Fill className="w-5 h-5 transition ease-in-out duration-200 hover:scale-95" />
          </button>
        </div>
        <div className="flex justify-center md:justify-start w-full">
          <Link href="/">
            <a className="font-bold text-base">FORAGER</a>
          </Link>
        </div>
        <SearchComponent
          host={host}
          ingredients={ingredients}
        />
        <div className="hidden md:flex justify-end w-full space-x-3">
          <Link href="/">
            <a className="font-light">
              {router.pathname === '/' && (
                <RiHome5Fill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/' && (
                <RiHome5Line className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <Link href="/explore">
            <a className="font-light">
              {router.pathname === '/explore' && (
                <RiCompass3Fill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/explore' && (
                <RiCompass3Line className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <Link href="/activities">
            <a className="font-light">
              {router.pathname === '/activities' && (
                <RiHeartFill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/activities' && (
                <RiHeartLine className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="font-light">
              {router.pathname === '/bookmarks' && (
                <RiBookmarkFill className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
              {router.pathname !== '/bookmarks' && (
                <RiBookmarkLine className="w-6 h-6 transition ease-in-out duration-200 hover:scale-95" />
              )}
            </a>
          </Link>
          <ProfileDropdown host={host} />
        </div>
        <div className="flex md:hidden justify-end w-full">
          <Link href="/">
            <a>
              <img
                className="w-6 h-6 object-cover rounded-full bg-dark-gray bg-opacity-30 transition ease-in-out duration-200 hover:scale-95"
                src={!host.avatar ? `https://ui-avatars.com/api/?name=${host.name}` : host.avatar}
                alt="profile" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

const SearchComponent: React.FC<SearchComponentTypes> = ({ host, ingredients }) => {
  
  const { data: get_ingredients } = useSWR(`/api/ingredients`, fetcher, {
    refreshInterval: 1000,
    fallbackData: ingredients
  })

  const [searchTerm, setSearchTerm] = React.useState("")
  const [isDisplay, setIsDisplay] = React.useState(false)

  // code for the lightning fast search function
  const handleChange = (e: { target: { value: any } }) => {
    setSearchTerm(e.target.value)
    if(!e.target.value){
      setIsDisplay(false)
    }
    else{
      setIsDisplay(true)
    }
  }

  // get all ingredients from the api
  const getIngredients = get_ingredients.map((item: any, i: number) => {
    const split_ingredient = item.ingredient.split(", ")
    return {
      split_ingredient
    }
  })
  
  // initialize new empty array
  const final_results = new Array()

  // i = getIngredients, j = split_ingredient; for merging the ingredients objects to single array
  for(let i = 0; i < getIngredients.length; i++) {
    for(let j = 0; j < getIngredients[i].split_ingredient.length; j++) {
      const merged_arr_ingredients = getIngredients[i].split_ingredient[j]
      // pass the merged array of ingredients to an empty array (finaly_results)
      final_results.push({
        ingredient: merged_arr_ingredients
      })
    }
  }
  
  // search input filter for searching the ingredient name
  const search_results = !searchTerm ? final_results : final_results.filter((get: {ingredient: any}) =>
    get.ingredient.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  console.log(final_results)

  return (
    <div className="hidden md:flex justify-center w-full">
      <div className="relative flex items-center w-full max-w-[15rem] px-2 bg-light-gray bg-opacity-5 border border-black-matt border-opacity-10 focus-within:border-light-gray">
        <RiSearchLine className="text-black-matt text-opacity-50" />
        <input
          className="font-normal text-xs w-full p-2 outline-none bg-transparent"
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Ingredients" />
      </div>
      {isDisplay && (
        <React.Fragment>
          <button 
            className={`${isDisplay ? 'z-10 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}
            type="button"
            onClick={(e: any) => {
              setIsDisplay(false)
              setSearchTerm(e.target.value="")
            }} 
          />
          <div className="absolute top-12 z-10 flex justify-center w-full max-w-[15rem]">
            <div className="flex w-full shadow-sm bg-pure-white border border-black-matt border-opacity-10">
              <div className="flex flex-col w-full">
                {search_results.length !== 0 && (
                  <div className="flex items-center justify-between w-full px-3 py-2 border-b border-black-matt border-opacity-10">
                    <span className="font-bold text-xs">Available Ingredients</span>
                  </div>
                )}
                {search_results.length === 0 && (
                  <div className="flex w-full text-xs px-3 py-2 bg-pure-white hover:bg-light-gray hover:bg-opacity-5 border-b border-black-matt border-opacity-10">
                    No ingredients found...
                  </div>
                )}
                {search_results.map((search: any, i: number) => (
                  <Link href="/" key={i}>
                    <a className="flex w-full text-xs px-3 py-2 bg-pure-white hover:bg-light-gray hover:bg-opacity-5 border-b border-black-matt border-opacity-10">
                      { search.ingredient }
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default NavBar