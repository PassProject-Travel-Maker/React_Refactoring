import React from 'react'
import { ReactComponent as Grid } from 'img/grid.svg';
import { ReactComponent as Img1 } from 'img/section1.svg';
import { ReactComponent as Img2 } from 'img/section2.svg';
export default function Section3() {
  return (
      <div className="section3-content">
    <div className="section3-title_box">
      <div className="section3-title">여행을 계획하는 <br />가장 쉬운 방법.</div>
      <div className="section3-subtitle">몇 번의 클릭으로 완벽한 여행 경로를 설계하세요.</div>
    </div>
    <div className="section3-img1" data-aos="flip-right" data-aos-duration="1500"><Img1/></div>
    <div className="section3-img2" data-aos="flip-left" data-aos-duration="1500"><Img2/></div>
    <Grid className="section3-grid" />
  </div>
  )
}
