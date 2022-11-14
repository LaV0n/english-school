import styles from './Login.module.scss'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {login} from "../../bll/schoolReducer";
import {  useNavigate } from 'react-router-dom';

export const Login = ()=>{

    const [value,setValue]=useState('')
    const errorMessage=useAppSelector(state => state.school.errorMessage)
    const dispatch=useAppDispatch()
    const isAdmin=useAppSelector(state => state.school.isAdmin)
    const navigate = useNavigate()

    const onSubmitHandler=()=>{
        dispatch(login({password:value}))
        setValue('')
    }
    useEffect(()=>{
        if(isAdmin){
            return  navigate("/")
        }
    },[isAdmin])

    return (
        <div className={styles.container}>
            <div>Login</div>
            <form onSubmit={onSubmitHandler}>
                <input type={'password'} onChange={(e)=>setValue(e.currentTarget.value)} value={value}/>
                <button> login</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
        </div>
    )
}