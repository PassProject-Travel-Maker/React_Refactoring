import React from 'react';
import Header from './components/header/Header';
function App() {
  
  return (
    <>
    <div>하이하이하이</div>
    <Header/>
    <div>{ `${process.env.REACT_APP_NAME}`}</div>
    </>
  );
}

export default App;
