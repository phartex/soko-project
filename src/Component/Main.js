import React from 'react'
import Item from './Item'
import './Main.css'


const Main = () => {
    return (

            <div className="container">
                
                <div className="row target">
                    <div className='col-xs-12 col-md-12 col-lg-4 main_left'>
                        <p>Electronics(12)</p>
                        <p>Facemask(3)</p>
                        <p>Fresh food(8)</p>
                        <p>Grocery(6)</p>
                        <p>Home(24)</p>
                        <p>Kids(9)</p>

                    </div>
                    <div className='col-xs-12 col-md-12 col-lg-4 main_center'>
                        <p>Electronics(12)</p>
                        <div className='items'>
                            <Item />
                            <br/>
                            <Item />
                            <br/>
                            <Item/>
                            <br/>
                            <Item/>
                        </div>
                        
                
                    </div>
                    <div className='col-xs-12 col-md-12 col-lg-4 main_right'>
                        <p>Bag <button>0</button></p>

                        <i class="smile far fa-smile"></i>
                        <h5>It's empty here</h5>
                        <p>Start shopping to add items to your bag</p>
                    </div>
                
                </div>

            </div>

    )
}

export default Main
