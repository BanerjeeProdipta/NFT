import { CircularProgress } from '@material-ui/core'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Outlet />
    </Suspense>

  )
}

export default Layout
