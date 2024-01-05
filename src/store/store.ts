import { configureStore } from "@reduxjs/toolkit";
import addOnsSlice from "./features/addOnsSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import selectSlice from "./features/selectSlice";

export const store = configureStore({
    reducer:{
        addOns:addOnsSlice,
        select:selectSlice
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
