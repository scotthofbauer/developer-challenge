import Amplify from 'aws-amplify';
import React from 'react';
import awsExports from './aws-exports';
import Home from './pages/home/Home';
import MarketPlace from './pages/marketplace/MarketPlace';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
Amplify.configure(awsExports);


const App = () => {

  return (
   
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/marketplace'} element={<MarketPlace />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )

}

export default App;
