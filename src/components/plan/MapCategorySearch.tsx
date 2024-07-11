import { useQuery} from '@tanstack/react-query';
import { getAttractionApi, getGugunApi, getSidoApi } from 'components/apis/mapApi';
import { gugun, searchData, sido } from 'components/types/map';
import React,{useRef,useState} from 'react'

export default function MapCategorySearch() {
    const gugunRef = useRef<HTMLSelectElement>(null);
    const attarctionIdRef = useRef<HTMLSelectElement>(null); // select tag 상태 감시 변수
    const [searchData, setSearchData] = useState<searchData>({
        sidoCode: "0",
        gugunCode: "0",
        attarctionId: "0",
        keyword: "",
    });
    const { data : sidos } = useQuery<sido[]>({ queryKey: ['todos'], queryFn: getSidoApi,staleTime : Infinity })
    //쿼리 키가 없으면 인식을 못하네 -> 이부분 공부를 더 해야할듯
    const { data : guguns } = useQuery<gugun[]>({ queryKey: ['guguns', searchData.sidoCode], queryFn: ()=> getGugunApi(searchData.sidoCode), enabled : !!searchData.sidoCode})

    const onSelect = (e : React.ChangeEvent<HTMLSelectElement>)=>{
      console.log("하이")
        setSearchData((prev)=> ({
          ...prev,
          sidoCode : e.target.value
        }));
    }
    const HandleMapSearh = async()=>{
      setSearchData((prev)=>({
        ...prev,
        gugunCode : gugunRef.current ? gugunRef.current.value : prev.gugunCode,
        attarctionId : attarctionIdRef.current ? attarctionIdRef.current.value : prev.attarctionId,
        keyword : "",
      }))
      const response = await getAttractionApi(searchData);
      console.log(response.data);
    }
  return (
   <>
    <form className="grid grid-cols-10 gap-2 my-5 mx-5" role="search">
      <select
        id="search-area"
        className="form-select me-2 col-span-3 border rounded-md"
        name="sidoCode"
        onChange={onSelect}
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
      >
        <option value="0">구군 선택</option>
        {guguns?.map((gugun) => (
            <option key={gugun.gugunCode} value={gugun.gugunCode}>
              {gugun.gugunName}
            </option>
          )
        )}
      </select>

      <select id="search-content-id" className="form-select me-2 col-span-3 border rounded-md" ref={attarctionIdRef}>
        <option value="0" selected>관광지 유형</option>
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
