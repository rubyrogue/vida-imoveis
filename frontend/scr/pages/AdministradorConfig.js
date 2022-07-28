import React from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from '../components/ImoveisConfig/NavBar';
import {InfoSection} from '../components/ImoveisConfig/InfoSection';

export const AdmConfig = ({authorized}) => {
    // if (!authorized){
    //     return <Redirect to='/administrador'/>
    // }
    return (
        <>
            <NavBar/>
            <InfoSection/>
        </>
    )
}