import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import UserPage from './pages/UserPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user' element={<UserPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App
