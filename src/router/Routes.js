import { createBrowserRouter } from 'react-router-dom'
import Layout from '../views/layout/Layout'
import Home from '../views/pages/Home'
import Video from '../views/pages/Video'

const Routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'videos/:id',
        element: <Video />
      }
    ]
  }
]

const router = createBrowserRouter(Routes)

export default router
