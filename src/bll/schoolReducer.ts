import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserType={
    email:string
    telephone:string
}
type InitialStateType={
    isAdmin:boolean
    password:string
    errorMessage:string | null
    user:UserType
}

const initialState:InitialStateType={
    isAdmin:false,
    password:'123456',
    errorMessage:null,
    user:{
        email:'',
        telephone: ''
    }
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
        },
        setUserData(state,action:PayloadAction<{user:UserType}>){
            state.user=action.payload.user
        }
    }
})

export const schoolReducer=slice.reducer
export const {login,setUserData}=slice.actions