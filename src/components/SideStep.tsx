

const SideStep = ({step}:{step:number} ) => {

  return (
    <div  className='side-step'>
       <ul>
        <li className='d-flex align-items-center'>
            <span className={`step-num me-3 ${step === 1 && "active"}`}>1</span>
            <div>
                <span className=' text-white-50 mb-0'>STEP 1</span>
                <span className='fw-bold'>YOUR INFO</span>
            </div>
        </li>
        <li className='d-flex align-items-center'>
            <span className={`step-num me-3 ${step === 2 && "active"}`}>2</span>
            <div>
                <span className=' text-white-50 mb-0'>STEP 2</span>
                <span className='fw-bold'>SELECT PLAN</span>
            </div>
        </li>
        <li className='d-flex align-items-center'>
            <span className={`step-num me-3 ${step === 3 && "active"}`}>3</span>
            <div>
                <span className=' text-white-50 mb-0'>STEP 3</span>
                <span className='fw-bold'>ADD-ONS</span>
            </div>
        </li>
        <li className='d-flex align-items-center'>
            <span className={`step-num me-3 ${step === 4 && "active"}`}>4</span>
            <div>
                <span className=' text-white-50 mb-0'>STEP 4</span>
                <span className='fw-bold'>SUMMARY</span>
            </div>
        </li>
       </ul>
    </div>
  )
}

export default SideStep
