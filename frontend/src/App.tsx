import React from 'react';
import Home from './pages/home/Home';
require('dotenv').config()
// import { Route, Router, Routes } from 'react-router-dom';


const App = () => {

  return (
   
      // <div>
      //   <Router location={''} navigator={undefined}>
      //     <Routes>
      //       <Route path={'/'} element={<Home />}></Route>
      //     </Routes>
      //   </Router>
      // </div>

    <div>
      <Home />
    </div>
  )

}

export default App;
