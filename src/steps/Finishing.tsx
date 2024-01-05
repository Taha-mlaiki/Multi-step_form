import React from 'react'
import { useAppSelector } from '../store/store'

const Finishing = ({setStep}:{setStep:React.Dispatch<React.SetStateAction<number>>}) => {

    const select = useAppSelector((state)=> state.select)
    const addOns = useAppSelector((state)=> state.addOns)
    

    let total = select.price;
        addOns.map((on)=> total += on.price)

  return (
    <div className='finishing'>
        <div className='d-flex flex-column'>
            <h2>finishing</h2>
            <p>Double-check everything looks OK before confirming</p>
            <div>
                <div className='pick'>
                    <span className='d-block'>{select.title} ({select.payment === "month" ? "Monthly":"yearly"})</span>
                    <span onClick={()=>setStep(2)} className='d-block mt-1'>Change</span>
                    <span className='price'>${select.price}/{select.payment === "month" ? "mo":"yr"}</span>
                </div>
                <div className='features border-top py-2'>
                    {addOns.map((add)=> ( <div key={add.id} className='d-flex mt-2'>
                        <span>{add.title}</span>
                        <span className='ms-auto'>+${add.price}/{select.payment === "month" ? "mo":"yr"}</span>
                    </div>))}
                </div>
            </div>
            <div className='total d-flex'>
                    <span>total(per {select.payment === "month" ? "month":"year"})</span>
                    <h5 className='ms-auto'>+${total}/{select.payment === "month" ? "mo":"yr"}</h5>
            </div>
            <div className="step">
                <span onClick={()=>setStep((prev)=> prev - 1 )} className='back'>Go Back</span>
                <button onClick={()=>setStep((prev)=> prev + 1 )} className="next">Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default Finishing
