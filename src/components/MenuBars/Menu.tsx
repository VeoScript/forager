import React from 'react'
import MenuLinks from './Options/MenuLinks'
import AccountLinks from './Options/AccountLinks'
import Credits from './Options/Credits'
import { RiCloseLine } from 'react-icons/ri'

interface TypeProps {
  isMenuOpen: any
  setMenuOpen: any
}

const Menu: React.FC<TypeProps> = ({ isMenuOpen, setMenuOpen }) => {
  return (
    <React.Fragment>
      {isMenuOpen && (
        <React.Fragment>
          <button onClick={() => {setMenuOpen(false)}} type="button" className={`${isMenuOpen ? 'z-10 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`} />
          <div className="fixed md:hidden inset-0 z-50 flex flex-col w-full h-full overflow-y-auto bg-ghost-white">
            <div className="flex items-center justify-center w-full p-3 border-b border-black-matt border-opacity-10">
              <button
                className="absolute left-5"
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
              <div className="flex justify-center w-full">
                <h3 className="font-normal text-sm">Options</h3>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <MenuLinks />
              <AccountLinks />
              <Credits />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Menu