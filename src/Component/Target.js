import React from 'react'
import home from './home.png'
import './Target.css'


const Target = () => {
    return (
        <div className="container">
            <div className="row target">
                <div className='col-x2-6 col-md-6 col-lg-6 target_left'>
                    <img src={home} width='35px' height='40px' />
                    <div className='target_right'>
                        <h3>Target</h3>
                        <p>Cham Towers , Plot 12  Nkruma Rd ,Kampala, ug</p>
                    </div>
                </div>
                <div className='col-x2-6 col-md-6 col-lg-6 bag'>
                    <div className='bag_left'>
                        <i class="fas fa-shopping-bag"></i>
                        <p className="para">Bag</p>
                    </div>
                    <div className='bag_right'>
                        <i class="fas fa-user"></i>
                        <p className="para">Account</p>
                    </div>
                
                </div>
                
            </div>
            <hr/>
           
        </div>
        
    )
}

export default Target
