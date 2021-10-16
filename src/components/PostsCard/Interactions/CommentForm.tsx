import React from 'react'
import Link from 'next/link'
import Spinner2 from '~/utils/Spinner2'
import { useForm } from 'react-hook-form'
import { RiSendPlane2Line } from 'react-icons/ri'

interface FormData {
  commentbox: String
}

interface CommentFormTypes {
  host: any
  dishId: any
}

const CommentForm: React.FC<CommentFormTypes> = ({ host, dishId }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {
      isSubmitting
    }
  } = useForm()

  async function onComment(formData: FormData) {
    const userId = host.id
    const commentbox = formData.commentbox
    
    await fetch('/api/comments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        commentbox,
        userId,
        dishId
      })
    })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onComment)} className="flex flex-col items-center w-full">
      <div className="flex items-center w-full bg-pure-white border-b border-black-matt border-opacity-10">
        <input
          className="font-normal text-xs w-full px-5 py-3 outline-none bg-transparent"
          type="text"
          placeholder="Add a comment..."
          {...register('commentbox', { required: true })}
        />
        {!isSubmitting && (
          <button
            className="flex text-xl px-3 border-l border-black-matt border-opacity-10 outline-none transform hover:scale-95"
            type="submit"
          >
            <RiSendPlane2Line />
          </button>
        )}
        {isSubmitting && (
          <div className="flex text-xl px-1.5 border-l border-black-matt border-opacity-10 transform hover:scale-95">
            <Spinner2 />
          </div>
        )}
      </div>
    </form>
  )
}

export default CommentForm