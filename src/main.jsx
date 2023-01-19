import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from './App';
import { RouterProvider } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <ToastContainer autoClose={4000} theme={'dark'} />
    <RouterProvider router={router} />
  </>
)
