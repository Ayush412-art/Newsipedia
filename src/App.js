import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/main';
import Footer from './component/footer';
 import Navbar from './component/navbar';
import Sports from './component/sports' ;
import National from './component/national';
import International from './component/International';
import Entertainment from './component/Entertainment';
function App() {
  return (
  
    <div className='App'>
    
    <BrowserRouter>
     <Navbar/> 
      <Routes>
     
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/National' element={<National/>}></Route>
        <Route exact path='/International' element={<International/>}></Route>
        <Route exact path='/Entertainment' element={<Entertainment/>}></Route>
        <Route exact path='/Sports' element={<Sports/>}></Route>
      </Routes>
    </BrowserRouter>
        <Footer/>
     
     </div>

  
  );
}

export default App;
