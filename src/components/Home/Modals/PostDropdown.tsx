/* eslint-disable @next/next/no-img-element */
import React from 'react'
import EditPost from './EditPost'
import DeletePost from './DeletePost'
import { RiMoreFill } from 'react-icons/ri'

interface TypeProps {
  host: any
  dish: any
}

const PostDropdown: React.FC<TypeProps> = ({ host, dish }) => {
  
  const [isDropdown, setIsDropdown] = React.useState(false)

  return (
    <React.Fragment>
      <button
        className="p-1 rounded-full transition ease-in-out duration-200 outline-none hover:bg-dark-gray hover:bg-opacity-10"
        type="button"
        onClick={() => {
          setIsDropdown(true)
        }}
      >
        <RiMoreFill />
      </button>
      {isDropdown && (
        <React.Fragment>
          <button 
            className={`${isDropdown ? 'z-10 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}
            type="button"
            onClick={() => {
              setIsDropdown(false)
            }} 
          />
          <div className="relative">
            <div className="absolute -left-16 top-4 z-10">
              <div className="flex w-full max-w-xl shadow-sm bg-[#EDEDED] border border-black-matt border-opacity-10">
                <div className="flex flex-col w-full">
                  <EditPost
                    host={host}
                    dish={dish}
                    setIsDropdown={setIsDropdown}
                  />
                  <DeletePost
                    setIsDropdown={setIsDropdown}
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default PostDropdown