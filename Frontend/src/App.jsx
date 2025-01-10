import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/User/Main'
import Wishlist from './Pages/User/Wishlist'
import AddForm from './Pages/User/AddForm'
import Details from './Pages/User/Details'
import UserRoot from './Pages/UserRoot'
function App() {


  return (
    <>
       <Routes>
        <Route path='/' element={<UserRoot/>} >
          <Route index element={<Home/>}/>  
          <Route path='/:id' element={<Details/>}/>
          <Route path='/Wishlist' element={<Wishlist/>}/>
          <Route path='/AddForm' element={<AddForm/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
