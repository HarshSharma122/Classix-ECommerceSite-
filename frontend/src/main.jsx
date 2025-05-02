import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './components/Auth/signup/Signup.jsx'
import Hero from './components/Hero/Hero.jsx'
import Login from './components/Auth/Login/Login.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <Hero />
      },

      {
        path: '/auth/login',
        element: <Login/>
      },
      {
        path: '/auth/signup',
        element: <Signup />
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
