import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserType={
    email:string
    telephone:string
}
export type CoursesType={
    name:string
    description:string
    price:number
    background:string

}
type InitialStateType={
    isAdmin:boolean
    password:string
    errorMessage:string | null
    user:UserType
    courses:CoursesType[]
}

const initialState:InitialStateType={
    isAdmin:false,
    password:'123456',
    errorMessage:null,
    user:{
        email:'',
        telephone: ''
    },
    courses:[
        {name:'Online 7 days per week',
        description:'Writing is easily done, too – you can send your teacher mini-essays or homework assignments of any sort through email or online learning platforms.',
        price:400,
        background:'https://oxfordhousebcn.com/wp-content/uploads/6-Benefits-of-Studying-English-Online.jpg'
        },
        {name:'Online 3 days per week',
            description:'Writing is easily done, too – you can send your teacher mini-essays or homework assignments of any sort through email or online learning platforms.',
            price:300,
            background:'https://www.gettingsmart.com/wp-content/uploads/2017/01/Girl-with-Headphones-Using-Laptop-Listening-to-Podcast-Feature-Image.jpg'
        },
        {name:'Online 2 days per week',
            description:'Writing is easily done, too – you can send your teacher mini-essays or homework assignments of any sort through email or online learning platforms.',
            price:200,
            background:'https://campustechnology.com/-/media/EDU/CampusTechnology/2018-Images/20180618onlinelearning.jpg'
        },
        {name:'Online 1 days per week',
            description:'Writing is easily done, too – you can send your teacher mini-essays or homework assignments of any sort through email or online learning platforms.',
            price:100,
            background:'https://i.cbc.ca/1.5825640.1606940619!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/shutterstock-huge-file.jpg'
        },
    ],
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