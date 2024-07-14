import React from 'react'
import {Map,MapMarker} from 'react-kakao-maps-sdk'
import MapCategorySearch from './MapCategorySearch'
import { useMapStore } from 'store/map'
export default function KakaoMap() {
  const {areas}  = useMapStore();
  return (
    <div className='kakaomap-map_box'>
    <MapCategorySearch/>
    <Map // 지도를 표시할 Container
      className="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "95%",
        height: "80%",
      }}
      level={3} // 지도의 확대 레벨
    >
      {areas.map( (area,index)=>(
        <MapMarker // 마커를 생성합니다
        key={index}
        position={{
          // 마커가 표시될 위치입니다
          lat: area.latitude,
          lng: area.longitude,
        }}
      />
      ))}
      
    </Map>
    </div>
  )
}
