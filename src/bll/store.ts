import { configureStore } from "@reduxjs/toolkit"
import {TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import {schoolReducer} from "./schoolReducer";

export const store=configureStore({
    reducer:{
        school:schoolReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector