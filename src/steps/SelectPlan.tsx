import React, { useEffect, useState } from 'react'
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"
import { useAppDispatch } from '../store/store'
import { addSelected } from '../store/features/selectSlice'



export  type plan = {
    img:string
    title:string
    price:number
    active:boolean
    payment:string
}
const SelectPlan = ({setStep}:{setStep:React.Dispatch<React.SetStateAction<number>>}) => {

    const [planDate,setPlanDate] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    const [plans,setPlans] = useState<plan[]>([
        {
            img:arcade,
            title:"Arcade",
            price:9,
            active:true,
            payment:`${planDate ? "year":"month"}`
        },
        {
            img:advanced,
            title:"Advanced",
            price:12,
            active:false,
            payment:`${planDate ? "year":"month"}`
        },
        {
            img:pro,
            title:"Pro",
            price:15,
            active:false,
            payment:`${planDate ? "year":"month"}`
        }
    ])

    function hundelClick(title:string){
        setPlans((prev)=> prev.map((plan)=> plan.title === title ? {...plan,active:!plan.active}: {...plan,active:false}))
    }

    useEffect(() => {
        setPlans((prev) =>
          prev.map((plan) => ({
            ...plan,
            payment: `${planDate ? "year" : "month"}`,
          }))
        );
      }, [planDate]);

    function hundelNext(){
        const finalSelectedarr = plans.filter((plan)=> plan.active === true )
        const finalSelectedObj = {...finalSelectedarr[0]}
        dispatch(addSelected(finalSelectedObj))
        setStep((prev:number)=> prev + 1)
    }

  return (
    <div className='select-plan'>
        <div>
            <h3>Select your plan</h3>
            <p>You have the option of monthly or yearly billing</p>
            <div className="row">
                {plans.map((plan)=> <div key={plan.title} onClick={() =>hundelClick(plan.title)} className="col-md-4 ">
                    <div className={`d-flex flex-row flex-md-column plan ${plan.active && "active"} `}>
                        <img src={plan.img} alt="" />
                        <div className='d-flex flex-column'>
                        <span className='fs-6 fw-bold title'>{plan.title}</span>
                        <span className='price'>${plan.price}/{planDate?"yr":"mo"}</span>
                        </div>
                    </div>
                </div> )}
            </div>
            <div className={`month-year mb-5 ${planDate ? "year":"month"} `}>
                <div className='d-flex'>
                    <span>Monthly</span>
                    <div onClick={()=> {setPlanDate((prev)=> !prev);}} className='button'></div>
                    <span>Yearly</span>
                </div>
            </div>
            <div className="step d-flex justify-content-between align-items-center">
                <span  onClick={()=>setStep((prev:number)=> prev - 1)} className='back'>Go Back</span>
                <button onClick={hundelNext} className="next">Next Step</button>
            </div>
        </div>
    </div>
  )
}

export default SelectPlan
