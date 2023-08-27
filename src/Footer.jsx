import React from 'react'
import "./Footer.css"
import Footerlogo from "./assets/footer-logo.png"
function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <div className='coloum'>
                    <h1>Find Us</h1>
                    <p>Where to find us :</p>
                    <ul>
                        <li>
                            <i class="ri-map-pin-fill"></i>&nbsp;<p>MOH MIRDHAN , BISALPUR ROAD, FARIDPUR ,BAREILLY,UTTAR PRADESH ,243503</p>
                        </li>
                        <li>
                            <i class="ri-phone-fill"></i>&nbsp;<p>+91-9999878398</p>
                        </li>
                        <li>
                            <i class="ri-mail-fill"></i>&nbsp;<p>info@gmail.com</p>
                        </li>

                    </ul>
                </div>
                <div className='coloum'>
                    <h1>Follow Us</h1>

                    <ul>
                        <li>
                            <i class="ri-facebook-circle-fill"></i>&nbsp;<p><a href='faceboook ' >www.facebook.com</a></p>
                        </li>
                        <li>
                            <i class="ri-mail-open-fill"></i>&nbsp;<p><a href='faceboook ' >www.facebook.com</a></p>
                        </li>


                    </ul>
                </div>
                <div className='coloum'>
                    <h1>Quick Links</h1>

                    <ul className='margin'>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <p>Services</p>
                        </li>
                        <li>
                            <p>Our team</p>
                        </li>
                        <li>
                            <p>Contact</p>
                        </li>
                        <li>
                            <p></p>
                        </li>

                    </ul>
                </div>
                <div className='coloum'>
                    <h1>Recent Projects</h1>

                    <ul>
                        <li>
                            <i class="ri-map-pin-fill"></i>&nbsp;<p>PROJECT1</p>
                        </li>

                        <li>
                            <i class="ri-map-pin-fill"></i>&nbsp;<p>PROJECT1</p>
                        </li>

                        <li>
                            <i class="ri-map-pin-fill"></i>&nbsp;<p>PROJECT1</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className='lower-div'>
              <img src={Footerlogo} className='footer-logo'/>
              <p>All Rights Reserved. © 2017<span> RISING NATURE FOUNDATION </span></p>
              <div className='icon'>
              <i class="ri-facebook-circle-fill"></i>
              <i class="ri-instagram-fill"></i>
              <i class="ri-twitter-fill"></i>
              <i class="ri-linkedin-box-fill"></i>
              </div>

            </div>
        </div>
    )
}

export default Footer