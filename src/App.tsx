import React from 'react';
import Header from './components/header/Header';
function App() {
  
  return (
    <>
    <button>가나다라마</button>
    <Header/>
    <div>{ `${process.env.REACT_APP_NAME}`}</div>
    </>
  );
}

export default App;
