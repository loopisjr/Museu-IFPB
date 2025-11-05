import Layout from "./components/Layout"
import Router from "./router"
import { BrowserRouter } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
