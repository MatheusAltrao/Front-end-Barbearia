import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import './index.css'
import Birthday from './pages/Birthday/Birthday'



const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },

  {
    path: '/register',
    element: <Register />
  },

  {
    path:'/birthday',
    element:<Birthday />
  }
 

])

export { router }