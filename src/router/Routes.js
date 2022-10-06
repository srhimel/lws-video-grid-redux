import { createBrowserRouter } from 'react-router-dom'
import Layout from '../views/layout/Layout'
import Home from '../views/pages/Home'

const Routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
]

const router = createBrowserRouter(Routes)

export default router
