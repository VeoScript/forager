import React from 'react'
import PublishButton from './PublishButton'
import { useForm, useFieldArray } from 'react-hook-form'
import { RiAddLine, RiDeleteBin4Line } from 'react-icons/ri'

interface TypeProps {
  setIsOpen: any
}

interface FormData {
  title: string
  category: string
  description: string
  selected_ingredient: string
}

const PostCard: React.FC<TypeProps> = ({ setIsOpen }) => {

  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const {fields, append, remove} = useFieldArray<any>({
    control,
    name: 'selected_ingredient'
  })

  async function onPublish(formData: FormData) {
    console.log(formData)
    remove()
    reset()
    setIsOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onPublish)} className="flex flex-col md:flex-row w-full max-w-full px-3 py-5 md:p-5 space-x-0 space-y-2 md:space-x-2 md:space-y-0 bg-pure-white border border-black-matt border-opacity-10">
      {/* display create post form controls list */}
      <div className="flex flex-col w-full h-full space-y-5">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-semibold text-lg">Create Post</h3>
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
        </div>
      </div>
      {/* display add ingredients list */}
      <div className="flex flex-col w-full h-full space-y-5">
        <div className="flex items-center justify-between w-full px-2">
          <h3 className="font-semibold text-lg">List of Ingredients</h3>
          <button
            className="flex items-center space-x-1 text-light-gray outline-none pl-3 transition ease-in-out duration-200 hover:underline"
            type="button"
            onClick={() => append({ value: "" })}
          >
            <RiAddLine className="w-4 h-4" />
            <span className="text-sm">Add Ingredient</span>
          </button>
        </div>
        <div className="flex flex-col w-full space-y-2">
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
         {fields.length === 0 && (
          <div className="flex justify-center w-full py-3">
            <h1 className="font-normal text-sm text-light-gray">No ingredients at all.</h1>
          </div>
         )}
         {fields.length !== 0 && (
          <div className="flex w-full">
            <PublishButton
              append={append}
              setIsOpen={setIsOpen}
            />
          </div>
         )}
        </div>
      </div>
    </form>
  )
}

export default PostCard