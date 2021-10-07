import React from 'react'
import NavBar from '~/components/MenuBars/NavBar'
import Menu from '~/components/MenuBars/Menu'
import BottomBar from '~/components/MenuBars/BottomBar'

interface TypeProps {
  host: any
  children: any
}

const Layout: React.FC<TypeProps> = ({ host, children }) => {
  
  const [isMenuOpen, setMenuOpen] = React.useState(false)
  
  return (
    <div className="font-poppins flex flex-col items-center w-full max-w-full h-screen overflow-y-auto cursor-default text-black-dim bg-ghost-white">
      <div className="flex flex-col items-center w-full h-full">
        <div className="relative flex w-full">
          <NavBar
            host={host}
            setMenuOpen={setMenuOpen}
          />
          <Menu
            isMenuOpen={isMenuOpen}
            setMenuOpen={setMenuOpen}
          />
          <BottomBar />
        </div>
        <div className="flex flex-col items-center w-full max-w-5xl h-screen px-0 md:px-2 py-10 md:py-16">
          <div className="flex w-full max-w-full pb-10 md:pb-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout