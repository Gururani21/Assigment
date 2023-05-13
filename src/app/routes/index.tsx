import {RouteObject, createBrowserRouter} from 'react-router-dom'
import Layout from '../common/components/Layout'
import Dashboard from '../../Pages/Dashboard'
import Lib from '../../lib'

const combineRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <span>error</span>,
    children: [
      {index: true, element: <Dashboard />},
      {path: '*', element: <p>Not Match</p>},
    ],
  },
  {
    path: 'lib',
    element: <Lib />,
  },
]

const routes = createBrowserRouter(combineRoutes)
export default routes
