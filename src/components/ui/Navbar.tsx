import { useRef, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import CustomModal from './CustomModal'

function Navbar() {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleLinkOnClick = () => setIsOpen(false)

  const handleModalOnClose = () => setShowSearchModal(false)

  return (
    <nav className="sticky top-0 z-50">
      <div
        ref={ref}
        style={{ maxHeight: isOpen && ref.current ? ref.current.scrollHeight : 50 }}
        className="py-2 relative overflow-hidden transition-all duration-500 ease-in-out md:min-h-[100px]"
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

          <div className="flex justify-end flex-1 md:hidden">
            <button
              type="button"
              className="p-1 text-white transition duration-500 ease-in-out border border-transparent border-white rounded cursor-pointer md:hidden"
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
          <div className="justify-between flex-1 hidden md:flex md:items-center">
            <button type="button" className="relative mx-8" onClick={() => setShowSearchModal(true)}>
              <div className="absolute top-2 left-3">
                <AiOutlineSearch size={22} />
              </div>
              <input
                type="text"
                className="flex p-2 pl-10 text-xl text-white rounded-md lg:w-full flex-0 md:w-4 focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10"
                placeholder="Search items and collections"
              />
            </button>
            <div className="flex space-x-4 text-xl">
              <NavLink
                to="/collections"
                className="px-4 py-1 font-medium text-white transition duration-1000 rounded lg:px-4 text-md hover:text-primaryLight"
              >
                Collections
              </NavLink>
              <NavLink
                to="/feature"
                className="px-4 py-1 font-medium text-white transition duration-1000 rounded lg:px-4 text-md hover:text-primaryLight"
              >
                Feature
              </NavLink>
              <NavLink
                to="/faq"
                className="px-4 py-1 font-medium text-white transition duration-1000 rounded lg:px-4 text-md hover:text-primaryLight"
              >
                FAQ
              </NavLink>
              <NavLink
                to="/select-wallet"
                className="px-4 py-1 font-medium text-white transition duration-1000 rounded-md lg:px-4 text-md whitespace-nowrap bg-gradient-to-bl from-primaryLight to-primaryDark hover:bg-gradient-to-tr"
              >
                Select Wallet
              </NavLink>
            </div>
          </div>
          {/* LARGE screen links ENDS */}
        </div>

        {/* SMALL screen links STARTS */}
        <div className="my-4 space-y-2 md:hidden">
          <button type="button" className="relative" onClick={() => setShowSearchModal(true)}>
            <div className="absolute top-2 left-3">
              <AiOutlineSearch size={22} />
            </div>
            <input
              type="text"
              className="flex w-full p-2 pl-10 text-white rounded-md flex-0 focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10 w "
              placeholder="Search items and collections"
            />
          </button>
          <NavLink
            onClick={handleLinkOnClick}
            to="/collections"
            className="block p-2 font-semibold transition-all duration-300 rounded-md hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            Collections
          </NavLink>
          <NavLink
            onClick={handleLinkOnClick}
            to="/feature"
            className="block p-2 font-semibold transition-all duration-300 rounded-md hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            Feature
          </NavLink>
          <NavLink
            onClick={handleLinkOnClick}
            to="/faq"
            className="block p-2 font-semibold transition-all duration-300 rounded-md hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            FAQ
          </NavLink>
          <NavLink
            onClick={handleLinkOnClick}
            to="/select-wallet"
            className="block p-2 font-semibold transition-all duration-300 rounded-md hover:text-white hover:bg-primaryLight hover:opacity-75"
          >
            Select Wallet
          </NavLink>

        </div>
        {/* SMALL screen links ENDS */}

      </div>
      <CustomModal open={showSearchModal} onClose={handleModalOnClose}>
        <div className="relative mb-32">
          <div className="absolute top-2 left-2">
            <AiOutlineSearch size={22} />
          </div>
          <input
            type="text"
            className="w-full p-2 pl-10 text-white rounded-md focus:outline-none focus:ring-2 focus:border-transparent ring-primaryLight bg-white/10"
            placeholder="Search items and collections"
          />
        </div>
      </CustomModal>
    </nav>
  )
}

export default Navbar