import React, { useCallback, useEffect, useRef, useState } from 'react';
import {ScrollTo} from '../../components/Main/Hook/Scroll'
import Section1 from 'components/Main/Section1';
export default function Main() {

  const [page, setPage] = useState(1);
  const lastPage = useRef(4);
  const htmlRef = useRef(document.documentElement);

  const handleWheel = useCallback((e: WheelEvent)=>{
    console.log("함수")
    const $html = htmlRef.current;
    const windowHeight = window.innerHeight;

    if ($html.classList.contains("animated")) return;

    if (e.deltaY > 0) {
      if (page === lastPage.current) return;
      setPage((prevPage) => prevPage + 1);
    } else if (e.deltaY < 0) {
      if (page === 1) return;
      setPage((prevPage) => prevPage - 1);
    }

    const posTop = (page - 1) * windowHeight;
    $html.classList.add("animated");
    ScrollTo($html, posTop, 600); // Adjust the animation duration as needed
  },[page]);
  
  useEffect(() => {
    document.addEventListener("wheel", handleWheel);
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);
  return (
    <>
      <Section1/>
    </>
  )
}
