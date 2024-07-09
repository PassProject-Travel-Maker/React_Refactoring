import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Arrow } from 'img/arrow.svg';
import talk1 from 'img/main/talk1.png';
export default function Section4() {
  return (
    <div className="section4-content">
    <img className="section4-section1" src={talk1} alt="이미지"/>
    <div className="section4-title_box">
      <div className="section4-title">자, 출발해볼까요?</div>
      <div className="section4-subtitle">당신의 완벽한 여행이 기다리고 있습니다.</div>
      <Link to=""
        ><button
          className="section4-button px-3 py-1.5 text-sm font-semibold shadow-sm bg-yellow-400 hover:bg-yellow-500 ">
          Get Started <Arrow />
          </button>
      </Link>
    </div>
  </div>
  )
}
