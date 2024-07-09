import React from 'react'
import { ReactComponent as Phone } from 'img/phone.svg';
export default function Section2() {
  return (
    <div className="section2-content">
    <div className="section2-title_box">
      <div className="section2-title">새로운 여행이 기다리고 있어요!</div>
      <div className="section2-subtitle">전 세계 어디로든, 완벽한 여행 계획을 지금 바로 <br />시작해보세요.</div>
    </div>
    <div className="w-2/5 section2-phone" data-aos="fade-up" data-aos-duration="1500">
      <Phone/>
    </div>
  </div>
  )
}
