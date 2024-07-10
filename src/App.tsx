import React from 'react';
import ControllHeader from './components/header/ControllHeader';
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
    <ControllHeader/>
    <Outlet/>
    </>
  );
}

export default App;
