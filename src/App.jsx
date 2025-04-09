import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Header from './Components/Header'
import Login from './pages/Login'
import Product from './pages/Product'
import Footer from './Components/Footer'
import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'
import Cart from './pages/Cart'
function App() {
  return (
    <>

      <main className='bg-white text-teritary'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mens' element={<Category Category="men" banner={bannermens} />} />
            <Route path='/womens' element={<Category Category="women" banner={bannerwomens} />} />
            <Route path='/kids' element={<Category Category="kid" banner={bannerkids} />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart-page' element={<Cart />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
