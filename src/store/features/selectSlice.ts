import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { plan } from "../../steps/SelectPlan";

const storeData = localStorage.getItem("select")

const initialState = storeData ? JSON.parse(storeData):{};

 const selectSlice = createSlice({
    name:"selectSlice",
    initialState,
    reducers:{
        addSelected:(_state,action:PayloadAction<plan>)=>{
            localStorage.setItem("select",JSON.stringify(action.payload))
            return    {...action.payload}
        }
    }
 })

 export const {addSelected} = selectSlice.actions;

 export default selectSlice.reducer
