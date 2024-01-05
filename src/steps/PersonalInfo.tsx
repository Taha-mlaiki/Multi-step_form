import React, { FormEvent, useState } from 'react'
import Form from '../components/Form'


export  type info = {
  id:string,
  value:string,
  name:string,
  placeholder:string,
  label:string
  type:string
  req:boolean
}
const PersonalInfo = ({setStep}:{setStep:React.Dispatch<React.SetStateAction<number>>}) => {

  const [infoState,setInfoState] = useState<info[]>([
    {
      id:"1",
      name:"name",
      type:"text",
      value:"",
      placeholder:'e.g. Taha Mlaiki',
      label:"Name",
      req:false,
    },
    {
      id:"2",
      name:"email",
      value:"",
      placeholder:'e.g. mlaikitaha@gmail.com',
      label:"Email Adress",
      type:"email",
      req:false,
    },
    {
      id:"3",
      name:"tele",
      value:"",
      placeholder:'e.g. + 1234 567 890',
      label:"Your Phone Number",
      type:"tele",
      req:false,
    }
  ])
  
 
  function hundelSubmit (e:FormEvent){
    e.preventDefault();
    const result: string[] = [];
    
    const updatedInfo = infoState.map((info)=>{
      if(info.value.trim() === ""){
        return {...info,req:true}
      }
      else {
        result.push("false")
        return {...info,req:false}
      }
    })
    
    setInfoState(updatedInfo)
    
    if(result.length === 3){
      setStep((prev)=> prev + 1)
    }

}

  return (
    <div className='personal-content'>
      <div>
        <h2>Personal info</h2>
        <p>Please provide your name,email address,and phone number</p>
        <form action="" onSubmit={hundelSubmit}>
          {infoState.map((input)=> (
          <Form key={input.id}
          label={input.label}
          name={input.name}
          value={input.value}
          placeholder={input.placeholder}
          type={input.type}
          req={input.req}
          setInfoState={setInfoState}/>
          ))}
            <div className='d-flex '>
              <button type='submit'>Next Step</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalInfo
