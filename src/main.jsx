import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './components/ProductDetails.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import NotFound from './components/error/NotFound.jsx'


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
        path: "/product",
        element: <ProductDetails />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
)
