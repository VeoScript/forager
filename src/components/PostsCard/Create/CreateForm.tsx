import React from 'react'
import PublishButton from './PublishButton'
import AutoScroll from '@brianmcallister/react-auto-scroll'
import IngredientsIcon from '~/utils/Icons/Ingredients'
import { motion } from 'framer-motion'
import { useForm, useFieldArray } from 'react-hook-form'
import { RiAddLine, RiDeleteBin4Line, RiCloseFill } from 'react-icons/ri'

interface TypeProps {
  host: any
  setIsOpen: any
}

interface FormData {
  title: String
  category: String
  description: String
  selected_ingredient: any
}

const PostCard: React.FC<TypeProps> = ({ host, setIsOpen }) => {

  const { register, control, handleSubmit, reset, formState: { isSubmitting } } = useForm()

  const {fields, append, remove} = useFieldArray<any>({
    control,
    name: 'selected_ingredient'
  })

  async function onPublish(formData: FormData) {
    const userId = host.id
    const title = formData.title
    const category = formData.category
    const description = formData.description
    const selected_ingredient = formData.selected_ingredient
    const all_ingredients = selected_ingredient.map((e: { value: any }) => e.value).join(", ")

    await fetch('/api/dishes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        title,
        category,
        description,
        all_ingredients,
      })
    })
    remove()
    reset()
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onPublish)} className="flex flex-col md:flex-row w-full max-w-full px-3 py-5 md:p-5 space-x-0 space-y-2 md:space-x-2 md:space-y-0 bg-pure-white border border-black-matt border-opacity-10">
      {/* display create post form controls list */}
      <div className="flex flex-col w-full h-full space-y-5">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold text-base md:text-lg">Create Post</h3>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <div className="flex flex-col items-center w-full space-y-2">
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray">Food Title</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
                {...register("title", { required: true })}
              />
            </div>
            <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
              <div className="flex items-center justify-between w-full">
                <span className="text-xs text-light-gray">Category</span>
              </div>
              <input
                className="w-full font-normal text-base outline-none bg-transparent"
                type="text"
                {...register("category", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-light-gray">Post Description</span>
            </div>
            <input
              className="w-full font-normal text-base outline-none bg-transparent"
              type="text"
              {...register("description", { required: true })}
            />
          </div>
          <button
            className="fixed top-3 right-3 md:hidden transform hover:scale-95 transition ease-in-out duration-200 outline-none"
            type="button"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <RiCloseFill className="w-5 h-5 text-light-gray" />
          </button>
          <button
            className="hidden md:flex justify-center w-full p-4 text-sm border border-black-matt border-opacity-10 hover:border-light-gray transition ease-in-out duration-200 outline-none"
            type="button"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Cancel
          </button>
          <div className="hidden md:flex w-full">
            <h3 className="font-light text-xs text-light-gray">
              <span className="font-bold">Note: </span>
              <span>{`Don't hit enter if your're not already done inputting your ingredients, because it will published automatically.`}</span>
            </h3>
          </div>
          <div className="hidden md:flex w-full">
            {fields.length !== 0 && (
              <div className="flex w-full">
                <PublishButton
                  isSubmitting={isSubmitting}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* display add ingredients list */}
      <div className="flex flex-col w-full h-full space-y-5">
        <div className="flex items-center justify-between w-full px-2">
          <h3 className="font-semibold text-base md:text-lg">List of Ingredients</h3>
          <button
            className="flex items-center space-x-1 text-light-gray outline-none pl-3 transition ease-in-out duration-200 hover:underline"
            type="button"
            onClick={() => append({ value: "" })}
          >
            <RiAddLine className="w-4 h-4" />
            <span className="text-sm">Add Ingredient</span>
          </button>
        </div>
        <AutoScroll
          className="flex flex-col w-full h-full max-h-full md:max-h-[23rem] overflow-y-auto space-y-2"
          showOption={false}
          scrollBehavior="auto"
        >
          <div className="flex flex-col w-full h-full space-y-2">
            {fields.length === 0 && (
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className="flex flex-col justify-center items-center w-full h-full py-5 md:py-20 space-y-2"
              >
                <IngredientsIcon />
                <h1 className="font-normal text-sm text-light-gray">No ingredient at all, add some ingredients...</h1>
              </motion.div>
            )}
            {fields.map((item: any, index: any) => (
              <div className="flex flex-row items-center w-full px-3 py-2 space-y-1 bg-ghost-white border border-black-matt border-opacity-10 focus-within:border-dark-gray" key={item.id}>
                <div className="flex flex-col w-full space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-light-gray">Ingredient { index + 1 }</span>
                  </div>
                  <input
                    className="w-full font-normal text-base outline-none bg-transparent"
                    type="text"
                    {...register(`selected_ingredient.${index}.value`, { required: true })}
                  />
                </div>
                <button
                  className="text-light-gray outline-none pl-3 transition ease-in-out duration-200 hover:scale-90"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <RiDeleteBin4Line className="w-5 h-5" />
                </button>
              </div>
            ))}
            {fields.length !== 0 && (
              <div className="flex flex-col w-full space-y-2">
                <button
                  className="flex justify-center w-full p-4 text-sm border border-black-matt border-opacity-10 hover:border-light-gray transition ease-in-out duration-200 outline-none"
                  type="button"
                  onClick={() => append({ value: "" })}
                >
                  Add
                </button>
                <div className="flex md:hidden w-full">
                  <PublishButton
                    isSubmitting={isSubmitting}
                  />
                </div>
                <div className="flex md:hidden w-full">
                  <h3 className="font-light text-xs text-light-gray">
                    <span className="font-bold">Note: </span>
                    <span>{`Don't hit enter if your're not already done inputting your ingredients, because it will published automatically.`}</span>
                  </h3>
                </div>
              </div>
            )}
          </div>
        </AutoScroll>
      </div>
    </form>
  )
}

export default PostCard