import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import "./app.css"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <main>
          <Outlet />
      </main>
      <ToastContainer theme="colored"/>
    </Provider>
  )
}

export default App