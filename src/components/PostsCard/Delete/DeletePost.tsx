import React from 'react'

interface TypeProps {
  host: any
  dish: any
  setIsDropdown: any
}

const DeletePost: React.FC<TypeProps> = ({ host, dish, setIsDropdown }) => {

  const [deleteIsOpen, setDeleteIsOpen] = React.useState(false)

  return (
    <React.Fragment>
      <button
        className="flex flex-row items-center w-full px-3 py-2 space-x-2 border-t border-black-matt border-opacity-10 hover:bg-light-gray hover:bg-opacity-10"
        type="button"
        onClick={() => setDeleteIsOpen(true)}
      >
        <span className="text-xs">Delete</span>
      </button>
      {deleteIsOpen && (
        <div className="fixed z-20 inset-0 flex flex-col items-center justify-center w-full px-3">
          <button 
            className={`${deleteIsOpen ? 'z-10 block fixed inset-0 left-0 w-full h-full overflow-hidden bg-black-matt bg-opacity-50 cursor-default focus:outline-none' : 'hidden'}`}
            type="button"
            onClick={() => {
              setDeleteIsOpen(false)
              setIsDropdown(false)
            }} 
          />
          <div className="flex flex-row items-center justify-center align-middle z-10 w-full max-w-sm shadow-sm bg-pure-white border border-black-matt border-opacity-10">
            <div className="flex flex-col w-full p-3">
              <div className="flex w-full px-3 py-2">
                <span className="font-bold text-sm">Delete Post</span>
              </div>
              <div className="flex w-full px-3 py-1">
                <span className="font-normal text-xs">
                  Delete this post permanently?
                </span>
              </div>
              <div className="flex items-center justify-end w-full space-x-1 px-3 py-2">
                <button
                  className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-light-gray outline-none"
                  type="button"
                  onClick={() => {
                    setDeleteIsOpen(false)
                    setIsDropdown(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className="flex px-3 py-2 text-xs border border-black-matt border-opacity-10 hover:border-red-500 hover:text-red-500 outline-none"
                  type="button"
                  onClick={async () => {
                    const userId = host.id
                    const dishId = dish.id

                    await fetch('/api/dishes/delete', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ userId, dishId })
                    })
                    setDeleteIsOpen(false)
                    setIsDropdown(false)
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default DeletePost