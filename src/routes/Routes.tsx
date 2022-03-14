import { useRoutes } from 'react-router-dom'
import Layout from '../layout'
import Landing from '../pages/landing'
import NotFound from '../pages/notFound'

function Routes() {
  const routes = {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
    ],
  }

  const notFound = {
    path: '*',
    element: <NotFound />,
  }

  return useRoutes([routes, notFound])
}

export default Routes
