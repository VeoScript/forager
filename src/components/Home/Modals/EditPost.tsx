import React from 'react'
import EditForm from './Modal/EditForm'
import { Dialog, Transition } from '@headlessui/react'
import { RiAddBoxLine } from 'react-icons/ri'

interface TypeProps {
  host: any
  dish: any
  setIsDropdown: any
}

const EditPost: React.FC<TypeProps> = ({ host, dish, setIsDropdown }) => {
  let [isOpen, setIsOpen] = React.useState(false)

  function closeModal() {
    setIsOpen(false)
    setIsDropdown(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        className="flex flex-row items-center w-full px-3 py-2 space-x-2 hover:bg-light-gray hover:bg-opacity-10"
        type="button"
        onClick={openModal}
      >
        <span className="text-xs">Edit</span>
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 py-10 text-center bg-black-matt bg-opacity-30">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-full align-top"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-5xl text-left align-middle transition-all transform">
                <div className="flex w-full bg-white shadow-xl">
                  <EditForm
                    host={host}
                    dish={dish}
                    setIsOpen={setIsOpen}
                    setIsDropdown={setIsDropdown}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default EditPost