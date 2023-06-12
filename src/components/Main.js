import React from 'react'
import {Routes, Route, Navigate, Router } from 'react-router-dom';
import Header from './Header'; 
import Home from './Home';
import Footer from './Footer';
import About from './About';
import ContactUs from './ContactUs';
import Support from './Support';

function Main(){
    return(
        <>
        <Header />
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/support' element={<Support />} />
            <Route path="*" element={
                    <Navigate to='/home' replace />
                } />   
        </Routes>
        <Footer/>
        </>
        
    );
}

export default Main;