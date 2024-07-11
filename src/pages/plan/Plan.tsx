import PlanForm from 'components/plan/PlanForm';
import React from 'react'
export default function Plan() {
  return (
    <>
   <div className="plan-container">
  <div className="plan-left">
     <PlanForm />
     <div className='test'>
       <input />
     </div>
    {/* <CategoryView/> */}
  </div>
  <div className="plan-right">
  {/* <PlanView/> */}
  </div>
  </div>
    </>
  )
}
