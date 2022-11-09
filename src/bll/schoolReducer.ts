import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType={
    isAdmin:boolean
    password:string
    errorMessage:string | null
}

const initialState:InitialStateType={
    isAdmin:false,
    password:'123456',
    errorMessage:null
}

const slice=createSlice({
    name:'school',
    initialState,
    reducers:{
        login(state,action:PayloadAction<{password:string}>){
            if (action.payload.password===state.password){
                state.isAdmin=true
                state.errorMessage=null
            }else {
                state.errorMessage='incorrect password'
            }
        }
    }
})

export const schoolReducer=slice.reducer
export const {login}=slice.actions