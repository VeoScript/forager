import React from 'react'
import PostCard from './PostCard'
import { Dialog, Transition } from '@headlessui/react'
import { RiAddBoxLine } from 'react-icons/ri'

const CreateModal: React.FC = () => {
  let [isOpen, setIsOpen] = React.useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        className="hidden md:flex px-3 py-2 text-sm border border-black-matt border-opacity-10 hover:border-light-gray outline-none"
        type="button"
        onClick={openModal}
      >
        Create
      </button>

      <button
        className="md:hidden flex outline-none"
        type="button"
        onClick={openModal}
      >
        <RiAddBoxLine className="w-7 h-7" />
      </button>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-black-matt bg-opacity-30">
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
              className="inline-block h-screen align-top"
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
              <div className="inline-block w-full max-w-5xl py-10 overflow-hidden text-left align-middle transition-all transform">
                <div className="flex w-full bg-white shadow-xl">
                  <PostCard setIsOpen={setIsOpen} />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CreateModal