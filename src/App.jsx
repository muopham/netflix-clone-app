import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Detail from './pages/Detail'
import Footer from './components/Footer';

function App() {
  return (
      <>
        <Navbar/>        
        <Routes>
          <Route path='/' element={<Home />} />          
        </Routes>
        <Routes>
          <Route path='/movies/:id' element= {<Detail />} />         
        </Routes>
        <Footer />       
      </>    
  )
}

export default App;
