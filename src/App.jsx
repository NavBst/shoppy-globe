import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import "./app.css"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import { ToastContainer } from "react-toastify"
import { Suspense } from "react"
import Loading from "./components/loading/Loading"


const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <main>
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer theme="colored" />
    </Provider>
  )
}

export default App