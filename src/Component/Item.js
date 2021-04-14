import React from 'react'
import Mask from './Mask.jpg'
import './Item.css'

export const Item = () => {
    return (
        <div className='container row item-img'>
            <img src={Mask} width='80px'/>
            <div className='middle'>
            <h6>Kids 2pk Cloth Face Masks</h6>
            <p>UGX 185,000</p>

            </div>
            
           <button><i class="fas fa-plus"></i>Add</button> 
           <vr/>

        </div>
    )
}

export default Item
