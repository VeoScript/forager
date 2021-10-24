import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import useSWR from 'swr'
import { RiSearchLine } from 'react-icons/ri'

interface TypeProps {
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

const SearchComponent: React.FC<TypeProps> = ({ ingredients }) => {
  
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

  // remove duplications of ingredients inside the final_results objects
  const mapped_ingredient = final_results.map(fr => fr.ingredient)
  const final_results_distinct = final_results.filter(({ingredient}, index) => !mapped_ingredient.includes(ingredient, index + 1))
  
  // search input filter for searching the ingredient name
  const search_results = !searchTerm ? final_results_distinct : final_results_distinct.filter((get: {ingredient: any}) =>
    get.ingredient.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div className="hidden md:flex justify-center w-full">
      <form 
        className="relative flex items-center w-full max-w-[15rem] px-2 bg-light-gray bg-opacity-5 border border-black-matt border-opacity-10 focus-within:border-light-gray"
        onSubmit={(e: any) => {
          e.preventDefault()
          setIsDisplay(false)
          Router.push(`/explore/${searchTerm}`)
        }}
      >
        <RiSearchLine className="text-black-matt text-opacity-50" />
        <input
          className="font-normal text-xs w-full p-2 outline-none bg-transparent"
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Ingredients" />
        <button type="submit" className="hidden"></button>
      </form>
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
                  <Link href={`/explore/${search.ingredient}`} key={i}>
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

export default SearchComponent