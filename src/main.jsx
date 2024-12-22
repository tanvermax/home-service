import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Routs from '../routs/Routs.jsx'

createRoot(document.getElementById('root')).render(


  <StrictMode>
   <RouterProvider router={Routs}></RouterProvider>
  </StrictMode>,
)
