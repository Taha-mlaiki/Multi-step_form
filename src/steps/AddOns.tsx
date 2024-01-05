import React, { useState } from 'react'
import { useAppDispatch } from '../store/store'
import { addOns } from '../store/features/addOnsSlice'
export type feature = {
    id:number
    title:string,
    sub:string,
    price:number,
    check:boolean
}
const AddOns = ({setStep}:{setStep:React.Dispatch<React.SetStateAction<number>>}) => {

    const dispatch = useAppDispatch();


    const [features,setFeatures] = useState<feature[]>([
        {
            id:1,
            title:"Online service",
            sub:"Access to multiplayer",
            price:1,
            check:true
        },
        {
            id:2,
            title:"Larger storage",
            sub:"Extra 1TB cloud save",
            price:2,
            check:false
        },
        {
            id:3,
            title:"Customizable Profile",
            sub:"Custom Theme on your profile",
            price:2,
            check:false
        },
    ])


   function hundelNext(){
    const finalResult  = features.filter((feat)=> feat.check === true)
    dispatch(addOns(finalResult))
    setStep((prev:number)=> prev + 1)
   }



  return (
    <div className='add-ons'>
      <div>
        <h3>Pick add-ons</h3>
        <p>Add-ons help enhance your gaming experience</p>
        <form>
            {features.map((feature)=> ( <label  className={`${feature.check ? "active" : ""}`} key={feature.title} htmlFor={feature.title}>
                <input onChange={()=> setFeatures((prevfeats)=> prevfeats.map((feat)=> feat.id === feature.id ? {...feat,check:!feat.check}:feat))} checked={feature.check} type="checkbox" id={feature.title} />
                <div>
                    <span>{feature.title}</span>
                    <p className='m-0'>{feature.sub}</p>
                    <span>+${feature.price}/mo</span>
                </div>
            </label>) )}
        </form>
        <div className="step  d-flex justify-content-between align-items-center">
                <span  onClick={()=>setStep((prev:number)=> prev - 1)} className='back'>Go Back</span>
                <button onClick={()=>hundelNext()} className="next">Next Step</button>
        </div>
      </div>
    </div>
  )
}

export default AddOns
