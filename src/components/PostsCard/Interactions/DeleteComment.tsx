import React from 'react'
import { RiChatDeleteLine } from 'react-icons/ri'

interface DeleteCommentTypes {
  host: any
  comment: any
}

const DeleteComment: React.FC<DeleteCommentTypes> = ({ host, comment }) => {
  const [deleteIsOpen, setDeleteIsOpen] = React.useState(false)
  const userId = host.id
  const commentId = comment.id
  return (
    <React.Fragment>
      <button
        className="transition ease-in-out duration-200 transform hover:scale-95"
        type="button"
        onClick={() => setDeleteIsOpen(true)}
      >
        <RiChatDeleteLine className="text-black text-opacity-30" />
      </button>
      {deleteIsOpen && (
        <React.Fragment>
          <button 
            className={`${deleteIsOpen ? 'z-10 block fixed inset-0 w-full h-full bg-black-matt bg-opacity-50 cursor-default focus:outline-none' : 'hidden'}`}
            type="button"
            onClick={() => {
              setDeleteIsOpen(false)
            }} 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-3">
            <div className="flex flex-row items-center justify-center align-middle z-10 w-full max-w-sm shadow-sm bg-pure-white border border-black-matt border-opacity-10">
              <div className="flex flex-col w-full p-3">
                <div className="flex w-full px-3 py-2">
                  <span className="font-bold text-sm">Delete Comment</span>
                </div>
                <div className="flex w-full px-3 py-1">
                  <span className="font-normal text-xs">
                    Delete your comment permanently?
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
                      await fetch('/api/comments/delete', {
                        method: 'DELETE',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ userId, commentId })
                      })
                      setDeleteIsOpen(false)
                    }}
                  >
                    Delete
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

export default DeleteComment