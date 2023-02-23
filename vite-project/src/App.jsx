import React from 'react'
import Navbar from './component/Navbar'
import { Signup } from './component/Signup'
import Login from './component/Login'
import Addproduct from './component/Addproduct'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Product from './component/Product'
import Updateproduct from './component/Updateproduct'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<Updateproduct/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App