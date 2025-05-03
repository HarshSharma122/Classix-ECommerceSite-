import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Signup from './components/Auth/signup/Signup.jsx'
import Hero from './components/Hero/Hero.jsx'
import Login from './components/Auth/Login/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import { useAppStore } from './store/index.js'
import Address from './components/Profile/Address.jsx'
import Orders from './components/Profile/Orders.jsx'
const PrivateRoute = ({ children }) => {
  const { userInfo } = useAppStore();

  const isAuthencated = !!userInfo;
  return isAuthencated ? children : <Navigate to="/auth/login" />
};
const AuthRoute = ({ children }) => {
  const { userInfo } = useAppStore();

  const isAuthencated = !!userInfo;
  return isAuthencated ? <Navigate to="/profile" /> : children
};






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
        element: <Login />
      },
      {
        path: '/auth/signup',
        element: <AuthRoute>
          <Signup />
        </AuthRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>,
      },

      {
        path: '/profile/Address',
        element: <Address />
      },
      {
        path: '/profile/Orders',
        element: <Orders />
      }





    ]
  },
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
