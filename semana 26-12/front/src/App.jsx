
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Activate from "./containers/Activate"
import Home from "./containers/Home"
import Login from "./containers/Login"
import Signup from "./containers/Signup"
import Layout from "./hocs/Layout"

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/activate/:uid/:token" element={<Activate/>} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
