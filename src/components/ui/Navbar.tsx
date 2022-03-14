import { useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkOnClick = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50">
      <div
        ref={ref}
        style={{ maxHeight: isOpen && ref.current ? ref.current.scrollHeight : 50 }}
        className="relative overflow-hidden transition-all duration-500 ease-in-out lg:min-h-[100px]"
      >
        <div className="flex items-center justify-between">
          <div>
            <NavLink onClick={handleLinkOnClick} to="/">
              <h1 className="text-2xl font-bold">
                Psycho
                <span className="text-primaryLight">Art</span>
              </h1>
            </NavLink>
          </div>

          <div className="flex justify-end flex-1 lg:hidden">
            <button
              type="button"
              className="p-1 text-white transition duration-500 ease-in-out border border-transparent border-white rounded cursor-pointer lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <AiOutlineClose />
              ) : (
                <AiOutlineMenu />
              )}
            </button>
          </div>

          {/* LARGE screen links STARTS */}
          <div className="justify-between flex-1 hidden lg:flex lg:items-center">

            <div className="relative">
              <div className="absolute top-2.5 left-10">
                <AiOutlineSearch size={20} />
              </div>
              <input type="text" className="p-2 pl-10 ml-8 rounded-md focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10 lg:w-80 xl:w-auto" placeholder="Search items and collections" />
            </div>

            <div className="flex space-x-4 ">
              <NavLink
                to="/collections"
                className="px-4 py-1 text-lg font-medium text-white transition duration-1000 rounded hover:text-primaryLight"
              >
                Collections
              </NavLink>
              <NavLink
                to="/feature"
                className="px-4 py-1 text-lg font-medium text-white transition duration-1000 rounded hover:text-primaryLight"
              >
                Feature
              </NavLink>
              <NavLink
                to="/faq"
                className="px-4 py-1 text-lg font-medium text-white transition duration-1000 rounded hover:text-primaryLight"
              >
                FAQ
              </NavLink>
              <NavLink
                to="/select-wallet"
                className="px-4 py-1 text-lg font-medium text-white transition duration-1000 rounded-lg whitespace-nowrap bg-gradient-to-bl from-primaryLight to-primaryDark filter hover:bg-gradient-to-tr"
              >
                Select Wallet
              </NavLink>
            </div>
          </div>
          {/* LARGE screen links ENDS */}
        </div>

        {/* SMALL screen links STARTS */}
        <div className="my-4 space-y-2 lg:hidden">
          <NavLink
            onClick={handleLinkOnClick}
            to="/collections"
            className="block p-2 font-semibold transition-all duration-300 rounded-lg hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            Collections
          </NavLink>
          <NavLink
            onClick={handleLinkOnClick}
            to="/feature"
            className="block p-2 font-semibold transition-all duration-300 rounded-lg hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            Feature
          </NavLink>
          <NavLink
            onClick={handleLinkOnClick}
            to="/faq"
            className="block p-2 font-semibold transition-all duration-300 rounded-lg hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            FAQ
          </NavLink>
          <NavLink
            onClick={handleLinkOnClick}
            to="/select-wallet"
            className="block p-2 font-semibold transition-all duration-300 rounded-lg hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            Select Wallet
          </NavLink>

        </div>
        {/* SMALL screen links ENDS */}

      </div>
    </nav>
  )
}

export default Navbar
