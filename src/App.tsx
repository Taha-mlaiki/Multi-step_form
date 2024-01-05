import { useState } from 'react'
import './App.css'
import SideStep from './components/SideStep'
import PersonalInfo from './steps/PersonalInfo'
import SelectPlan from './steps/SelectPlan'
import AddOns from './steps/AddOns'
import Finishing from './steps/Finishing'
import Summary from './steps/Summary'

const App: React.FC = ()=> {

  const [step,setStep] = useState<number>(1);

  function stepRender(){
      switch(step){
        case 1 : return <PersonalInfo  setStep={setStep} />
        case 2 : return <SelectPlan setStep={setStep} />
        case 3 : return <AddOns setStep={setStep} />
        case 4 : return <Finishing setStep={setStep} />
        case 5 : return <Summary  />
      }
    
  }

  return (
    <div className='main'>
      <div className="form-step d-flex">
        <SideStep step={step} />
        {stepRender()}
      </div>
    </div>
  )
}

export default App
