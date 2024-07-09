import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from 'img/arrow.svg';
import Card1 from 'img/main/window.png';
import Card2 from 'img/main/laptop-poses.png';
export default function Section1() {
    
  return (
    <>
     <div className="mainview-content">
    <div className="w-1/3 mainview-title">
      여행의 모든 순간을 <br />
      소중히.
      <br />
      <span className='mainview-span'>당신만의 맞춤 여행 경로로 더 특별한 추억을 만드세요.</span>
      <br />
      <Link to="">
        <button
          className="px-3 py-1.5 text-sm font-semibold shadow-sm bg-yellow-400 hover:bg-yellow-500 mainview-button">
          Get Started <Arrow />
        </button>
      </Link>
    </div>
    <img className="w-1/3 mainview-card1"  data-aos="fade-zoom-in" data-aos-duration="1500" src={Card1} />
    <img className="w-1/3 mainview-card2"  data-aos="fade-left" data-aos-duration="1500" src={Card2} />
  </div>
    </>
  )
}
