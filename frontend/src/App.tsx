import Amplify from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import awsExports from './aws-exports';
import Home from './pages/home/Home';
import MarketPlace from './pages/marketplace/MarketPlace';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
Amplify.configure(awsExports);


const App = () => {

  const [defaultAccount, setDefaultAccount] = useState(null);
  useEffect(() => {
      if(window.ethereum) {
          window.ethereum.request({method: 'eth_requestAccounts'}).then((result:any) => {
            accountChangedHandler(result[0])

        })
      }else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
  }, []) 

    const accountChangedHandler = (newAccount:any) => {
        setDefaultAccount(newAccount);
    }

  return (
   
      <div>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home address={defaultAccount}/>}></Route>
            <Route path={'/marketplace'} element={<MarketPlace address={defaultAccount}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )

}

export default App;
