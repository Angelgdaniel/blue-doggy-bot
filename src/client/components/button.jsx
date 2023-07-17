import React from 'react';
import '../styles/button.css';

function Btn({icon, text, onClick}){
    return(
        <>
        <button className='fw-bolder' onClick={onClick}><i className={icon}></i>{text}</button>
        </>
    )
}

export default Btn;