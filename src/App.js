import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Homepage from './Component/Homepage'
import NavBar from './Component/NavBar'
import Target from './Component/Target'
import Main from './Component/Main'
import Footer from './Component/Footer'
import Footer_down from './Component/Footer_down'




const App = ()=>{
     return (
        <>
            <Router>
                <div className='container-fluid bg-primary'>
                <NavBar />
                </div>
               
                <Target/>
                <Main/>
                <div className='container-fluid bg-primary'>
                <Footer/>
                </div>
                <div className = 'container-fluid'>
                    <br/>
                    <div className="container bg-light footer">
                    <Footer_down/>
                    </div>
                    
                </div>

            <Switch>
                    <Route path='/' exact/>
                    {/* <Route path ='/SignUp' component = {SignUp}></Route>
                    <Route path ='/Vacancy' component = {Vacancy}></Route> */}
                </Switch>
            </Router>
        
        </>
     )
 }

 export default App