import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Suspense fallback={(
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold lg:text-5xl animate-pulse">
          Psycho
          <span className="text-transparent bg-gradient-to-tr to-primaryLight via-primaryLight from-primaryDark bg-clip-text">Art</span>
        </h1>
      </div>
)}
    >
      <Outlet />
    </Suspense>

  )
}

export default Layout
