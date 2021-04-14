import React from 'react'
import whatsapp from './whatsapp.png'
import './Footer_down.css'

const Footer_down = () => {
    return (
        <div className='container footer text-center'>
        <div className='col'>
            <p>STORE DETAILS</p>
            <h4>Target</h4>
            <p>Chan Towers,Plot 12 Nkruma Rd, Kampala, Ug</p>
            <button><img src={whatsapp} />Chat with us</button>
        </div>
    </div>
    )
}

export default Footer_down
