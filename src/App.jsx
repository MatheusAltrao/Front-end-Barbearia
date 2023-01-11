import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import './index.css'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },

  {
    path: '/register',
    element: <Register />
  },


])

export { router }