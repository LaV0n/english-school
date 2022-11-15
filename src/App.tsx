import React from 'react';
import styles from './App.module.scss'
import './App.module.scss';
import {Header} from "./features/Header/Header";
import {Footer} from "./features/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Main} from "./features/Main/Main";
import { Courses } from './features/Courses/Courses';
import {Teachers} from "./features/Teachers/Teachers";
import {Consultation} from "./features/Сonsultation/Сonsultation";
import {Blog} from "./features/Blog/Blog";
import { Login } from './features/Login/Login';

function App() {
    return (
        <div className={styles.App}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/courses'} element={<Courses/>}/>
                <Route path={'/teachers'} element={<Teachers/>}/>
                <Route path={'/consultation'} element={<Consultation/>}/>
                <Route path={'/blog'} element={<Blog/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'*'} element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
