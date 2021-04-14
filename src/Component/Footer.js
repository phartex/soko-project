import React from 'react'
import './Footer.css'
import truck from './truck.png'
import medal from './medal.png'
import support from './support.png'


const Footer = () => {
    return (
        <div className='container '>
            
		<div className="row text-center image-cont">
			<div className="col-xs-12 col-md-4 col-lg-4">
                <img src={truck} className='image image-fluid'/>
                <p>Fast Delivery</p>
			</div>
			<div className="col-xs-12 col-md-4 col-lg-4">
                <img src={medal} className='image'/>
                <p>Buyer Protection</p>
			</div>
			<div className="col-xs-12 col-md-4 col-lg-4">
                <img src={support} className='image'/>
                <p>Customer Support</p>
			</div>
			
		</div>

        </div>
    )
}

export default Footer
