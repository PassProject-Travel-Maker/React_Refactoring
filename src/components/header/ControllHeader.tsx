import React from 'react'
import { useLocation } from 'react-router-dom';
import AbsoluteHeader from './AbsoluteHeader';
import RealtiveHeader from './RealtiveHeader';


export default function ControllHeader() {
  const location = useLocation();
  return (
    <>
    {location.pathname ==='/' ? <AbsoluteHeader/> : <RealtiveHeader/>}
  </>
  )
}
