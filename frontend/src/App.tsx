import Amplify from 'aws-amplify';
import React from 'react';
import awsExports from './aws-exports';
import Home from './pages/home/Home';
// import { Route, Router, Routes } from 'react-router-dom';
Amplify.configure(awsExports);


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
