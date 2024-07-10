import Category from 'components/plan/Category';
import PlanForm from 'components/plan/PlanForm';
import React from 'react'

export default function Plan() {
  
  return (
    <>
   <div className="plan-container">
  <div className="plan-left">
     <PlanForm />
    <Category/>
  </div>
  <div className="plan-right">
  {/* <PlanView/> */}
  </div>
  </div>
    </>
  )
}
