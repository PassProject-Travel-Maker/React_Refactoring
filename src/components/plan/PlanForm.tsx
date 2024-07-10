import React from 'react'
import { usePlanformStore } from 'store/plan'
import { useStore } from 'zustand'


export default function PlanForm() {

  const title = usePlanformStore( (state)=>state.title)
  const subject = usePlanformStore( (state)=>state.subject)
  const updateTitle=usePlanformStore( (state)=>state.updateTitle)
  const updateSubject=usePlanformStore( (state)=>state.updateSubject)
  
  return (
  <div className="form-input_box">
    <div className="form-title_box">
      <label htmlFor="title" >여행 제목</label>
      <input type="text" className="form-title" id="title" name="title"
      placeholder="여행제목을 입력해주세요"
      value={title}
      onChange={(e)=>updateTitle(e.target.value)}
      />
    </div>
    <div className="form-subject_box">
      <label htmlFor="subject" className="text-sm font-medium leading-6 text-gray-900">내용 </label>
      <input type="text" className="form-subject" name="subject" v-model="description" 
      placeholder="여행 설명을 입력해주세요"
      value={subject}
      onChange={(e)=>updateSubject(e.target.value)} 
      />
    </div>
  </div>
  )
}
