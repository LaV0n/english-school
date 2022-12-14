import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type UserType={
    email:string
    telephone:string
}
export type TeacherType={
    name:string
    slogan:string
    description:string
    avatar:string
    age:number
    experience:number
}
export type BlogType={
    id:number
    header:string
    img:string
    date:Date
    description:string
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
    teachers:TeacherType[]
    blogs:BlogType[]
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
    teachers:[
        {name:'Ann',
        slogan:'There is honor in teaching',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
        age:30,
        experience:5},
        {name:'Peter',
            slogan:'Teachers have a positive attitude',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            avatar:'https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg',
            age:35,
            experience:10},
        {name:'Julia',
            slogan:'Teachers make little one’s count',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            avatar:'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427',
            age:30,
            experience:5},
        {name:'Igor',
            slogan:'Teachers shapes future',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            avatar:'https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg',
            age:40,
            experience:12},
        {name:'Ann',
            slogan:'Your teaching can never be priced',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            avatar:'https://static.jobscan.co/blog/uploads/linkedin-profile-picture.jpg',
            age:28,
            experience:6},
    ],
    blogs:[
        {id:1, date:new Date('2022-03-25T12:00:00Z'), img:'https://images.pexels.com/photos/949592/pexels-photo-949592.jpeg?cs=srgb&dl=pexels-rovenimagescom-949592.jpg&fm=jpg', header:'WE start',description:'WE open our courses'},
        {id:2, date:new Date('2022-03-26T12:00:00Z'), img:'https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg', header:'New Teacher',description:'WE are growing'},
        {id:3, date:new Date('2022-03-27T12:00:00Z'), img:'https://resources.reed.co.uk/courses/coursemedia/343869/88a3ce6c-fc25-4a00-ab49-ba4742f2f02f_cover.jpg', header:'New course',description:'New course for advance knowledge'},
        {id:4, date:new Date('2022-07-28T12:00:00Z'), img:'https://www.stonegroup.co.uk/media/blog/Teacher_.jpg', header:'New teacher',description:'WE are growing'},
        {id:5, date:new Date('2022-10-30T12:00:00Z'), img:'https://financesonline.com/uploads/2015/02/Sales.jpg', header:'Sales',description:'Get more knowledge fol lower price'},

    ]
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
        logout(state){
          state.isAdmin=false
        },
        setUserData(state,action:PayloadAction<{user:UserType}>){
            state.user=action.payload.user
        },
        createNewPost(state,action:PayloadAction<{post:BlogType}>){
            state.blogs.unshift(action.payload.post)
        },
        deletePost(state,action:PayloadAction<{id:number}>){
            state.blogs=state.blogs.filter(p=>p.id!==action.payload.id)
        }
    }
})

export const schoolReducer=slice.reducer
export const {login,setUserData,logout,createNewPost,deletePost}=slice.actions