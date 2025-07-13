import { createRoot } from 'react-dom/client'
import {lazy, React} from 'react'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/error/NotFound.jsx'
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element:<ProductList />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
)
