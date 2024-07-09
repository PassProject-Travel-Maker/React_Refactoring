import React, { useCallback, useEffect, useRef, useState } from 'react';
import {ScrollTo} from '../../components/Main/Hook/Scroll'
import Section1 from 'components/Main/Section1';
import Section2 from 'components/Main/Section2';
import Section3 from 'components/Main/Section3';
import Section4 from 'components/Main/Section4';
export default function Main() {
  
  const [page, setPage] = useState(1);
  const lastPage = useRef(4);
  const htmlRef = useRef(document.documentElement);


  //어짜피 계속 렌더링이 되야하는데 useCallback으로 감싸는 이유가뭐지
  const handleWheel = useCallback ((e: WheelEvent)=>{
    const $html = htmlRef.current;
    if ($html.classList.contains('animated')) return;

    if (e.deltaY > 0) {
      if (page < lastPage.current) {
        setPage((prevPage) => prevPage + 1);
      }
    } else if (e.deltaY < 0) {
      console.log(page);
      if (page > 1) {
        setPage((prevPage) => prevPage - 1);
      }
    }
  },[page]);
  
  useEffect(() => {
    const $html = htmlRef.current;
    const windowHeight = window.innerHeight;
    const posTop = (page - 1) * windowHeight;

    $html.classList.add("animated");
    ScrollTo($html, posTop, 600); // Adjust the animation duration as needed

    document.addEventListener("wheel", handleWheel);
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [page,handleWheel]);
  return (
    <>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </>
  )
}
