// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Login from './Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Welcome from './Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import Charts from './components/Charts';
import Slider from './samples/Slider.js'
import Documentation from './samples/Documentation.js';
// import Documentation from './samples/Documentation.js';



function App() {
  return (



    // <Router>
    //   <Routes>

    //     <Route path='/' element={<Login/>} />



    //     <Route path='/welcome' element={<Welcome />} />
        
    //   </Routes>
    // </Router>
   
 <Router>
  <Routes>
    <Route path='/' element={<Slider/> } />
    <Route path='/documentation'  element={<Documentation/> } />
  </Routes>
</Router> 


  


  );
}

export default App;
