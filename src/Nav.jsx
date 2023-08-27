import React from 'react'
import "./Nav.css"
import logo from "./assets/logo.png"


function Nav() {

 

    return (
        <nav>
            
                <img src={logo} alt='logo' className='logo' />
            
            <div className='nav-headings'>
                <ul>
                    <li><a href='./Home'>HOME</a></li>
                    <li className='about'><a href='/about'>ABOUT <i class="ri-arrow-down-s-fill"></i></a>
                        <div className='dropdown1'>
                            <ul>
                            <li><a href='./Home'>Our Story</a></li>
                            <hr/>
                            <li><a href='./Home'>Our Approch</a></li>
                            </ul>
                        </div>
                    
                    
                    </li>
                    <li  className='about' ><a href='./Home'>RESOURCES <i class="ri-arrow-down-s-fill"></i> </a>
                    <div className='dropdown2'>
                            <ul>
                            <li><a href='./Home'>News And Events</a></li>
                            <hr/>
                            <li><a href='./Home'>News Letters</a></li>
                            <hr/>
                            <li><a href='./Home'>Contact</a></li>
                            <hr/>
                            <li><a href='./Home'>ITR Reports</a></li>
                            </ul>
                        </div>
                    
                    
                    </li>
                    <li><a href='./Home'>PROGRAMS</a></li>
                    <li><a href='./Home'>GET INVOLVED</a></li>
                    <button className='loginbtn' ><a href='./login'>LOG IN</a></button>
                    <button className='signupbtn'><a href='./login'> SIGN UP</a></button>
                </ul>
            </div>





        </nav>
    )
}

export default Nav