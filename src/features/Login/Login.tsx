import styles from './Login.module.scss'
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {login} from "../../bll/schoolReducer";
import {  useNavigate } from 'react-router-dom';
import { Alert, Button } from '@mui/material';

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
            <div className={styles.block}>
                <div>Login</div>
                <form onSubmit={onSubmitHandler}>
                    <input type={'password'} onChange={(e)=>setValue(e.currentTarget.value)} value={value}/>
                    <Button variant={'outlined'} color={'inherit'} onClick={onSubmitHandler}> login</Button>
                    {errorMessage &&
                        <Alert variant="filled" severity="error">
                            {errorMessage}
                        </Alert>
                    }
                </form>
            </div>
        </div>
    )
}