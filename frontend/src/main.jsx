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
import MenClothes from './components/productsShow/productCategory/MenClothes.jsx'
import ProductShow from './components/productsShow/ProductShow.jsx'
import CartContextProvider from './context/CartContextProvider.jsx'
import Cart from './components/productsShow/cart/Cart.jsx'
import TotalPriceProvider from './context/totalpriceContext/totalPriceProvider.jsx'
import OrderViewContextProvider from './context/OrderViewContext/OrderViewContextProvider.jsx'
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
      },
      {
        path: "/MenClothes",
        element: <ProductShow />
      },
      {
        path: "/product/cart",
        element: <Cart />
      }




    ]
  },
])


createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <TotalPriceProvider>
      <OrderViewContextProvider>

        <RouterProvider router={router} />
      </OrderViewContextProvider>

    </TotalPriceProvider>
  </CartContextProvider>
)
