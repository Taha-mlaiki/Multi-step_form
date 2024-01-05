import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { feature } from "../../steps/AddOns";

const storageData = localStorage.getItem("Ons");

const initialState:feature[] = storageData ? JSON.parse(storageData) : []


const addOnsSlice = createSlice({
    name:"addOnsSlice",
    initialState,
    reducers:{
        addOns:{
            reducer:(_state,action:PayloadAction<feature[]>) => {
                return action.payload
            },
            prepare:(payload:feature[])=> {
                localStorage.setItem("Ons", JSON.stringify([...payload]))
                return {payload}
            }
        }
    }
})

export const {addOns} = addOnsSlice.actions;

export default addOnsSlice.reducer
