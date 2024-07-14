import { useQuery} from '@tanstack/react-query';
import { getAttractionApi, getGugunApi, getSidoApi } from 'components/apis/mapApi';
import { gugun, searchData, sido } from 'types/map';
import React,{useRef,useState} from 'react'
import { useMapStore } from 'store/map';

export default function CategorySearch() {
    const gugunRef = useRef<HTMLSelectElement>(null);
    const attarctionIdRef = useRef<HTMLSelectElement>(null);
    const [sidoCode,setSidoCode] = useState<string>("");
    const { data : sidos } = useQuery<sido[]>({ queryKey: ['todos'], queryFn: getSidoApi, staleTime : Infinity })
    const { data : guguns } = useQuery<gugun[]>({ queryKey: ['guguns', sidoCode], queryFn: ()=> getGugunApi(sidoCode), enabled : sidoCode !== "0"})
    const {setArea,computeAreaCenter} = useMapStore();
    const onSelect = (e : React.ChangeEvent<HTMLSelectElement>)=>{
      setSidoCode(e.target.value);
    }
    const HandleMapSearh = async()=>{
      const searchData = {
        sidoCode: sidoCode,
        gugunCode : gugunRef.current ? gugunRef.current.value : "0",
        attarctionId : attarctionIdRef.current ? attarctionIdRef.current.value : "0",
        keyword : "",
      }
      const response = await getAttractionApi(searchData);
      setArea(response.data);
      computeAreaCenter(response.data);
    }
  return (
   <>
    <form className="grid grid-cols-10 gap-2 my-5 mx-5" role="search">
      <select
        id="search-area"
        className="form-select me-2 col-span-3 border rounded-md"
        name="sidoCode"
        onChange={onSelect}
        defaultValue="0"
      >
        <option value="0">검색 할 지역 선택</option>
        {sidos?.map((sido) => (
            <option key={sido.sidoCode} value={sido.sidoCode}>
              {sido.sidoName}
            </option>
          )
        )}
      </select>
      <select
        id="search-gugun"
        className="form-select me-2 col-span-3 border rounded-md"
        name="gugunCode"
        ref={gugunRef}
        defaultValue="0"
      >
        <option value="0">구군 선택</option>
        {guguns?.map((gugun) => (
            <option key={gugun.gugunCode} value={gugun.gugunCode}>
              {gugun.gugunName}
            </option>
          )
        )}
      </select>

      <select id="search-content-id" className="form-select me-2 col-span-3 border rounded-md" ref={attarctionIdRef} defaultValue="0">
        <option value="0">관광지 유형</option>
        <option value="12">관광지</option>
        <option value="14">문화시설</option>
        <option value="15">축제공연행사</option>
        <option value="25">여행코스</option>
        <option value="28">레포츠</option>
        <option value="32">숙박</option>
        <option value="38">쇼핑</option>
        <option value="39">음식점</option>
      </select>
      <button id="" 
      className="btn btn-outline-success col-span-1 bg-slate-300 text-black rounded-md hover:bg-amber-300 py-2" type="button" onClick={HandleMapSearh}>
      검색
      </button>
    </form>
   </>
  )
}
