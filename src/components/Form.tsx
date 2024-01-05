import React from 'react'
import { info } from '../steps/PersonalInfo'

type FormProps = {
    name:string,
    label:string,
    placeholder:string,
    value:string
    type:string
    req:boolean
    setInfoState:React.Dispatch<React.SetStateAction<info[]>>
}

const Form = ({label,name,placeholder,value,type,req,setInfoState}:FormProps) => {
  return (
    <div className={`mx-0  ${req ? "required":""}`}>
    <label htmlFor="name">{label}</label>
    <input name={name} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setInfoState((prevInfo)=> prevInfo.map((info)=> info.name === name ? {...info, value:e.target.value}:{...info} ) ) } placeholder={placeholder} type={type} />
    <span>This field is Required</span>
    </div>
  )
}

export default Form
