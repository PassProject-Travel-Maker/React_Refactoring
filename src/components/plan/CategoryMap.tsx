import React from 'react'
import {Map,MapMarker} from 'react-kakao-maps-sdk'
import CategorySearch from './CategorySearch'
import { useMapStore } from 'store/map'
import AreaItem from './AreaItem';
export default function CategoryMap() {
  const {areas,latitude,longitude}  = useMapStore();
  return (
    <div className='kakaomap-map_box'>
    <CategorySearch/>
    <Map
      className="map"
      center={{

        lat: latitude,
        lng: longitude,
      }}
      style={{
        width: "95%",
        height: "80%",
      }}
      level={7}
    >
      {areas.map( (area,index)=>(
        <MapMarker 
        key={index}
        position={{
          lat: area.latitude,
          lng: area.longitude,
        }}
      />
      ))}
    </Map>
    <ul className='kakaomap-ul "divide-y divide-gray-100"' >
      {areas.map( (area,index)=>(
          <AreaItem area={area}/>
      ))}
    </ul>
    </div>
  )
}
