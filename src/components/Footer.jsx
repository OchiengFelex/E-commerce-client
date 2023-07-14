import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import {FaWordpressSimple} from 'react-icons/fa'
import {FaDownload} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    const year= new Date().toLocaleDateString();
  return (
    <div className='footer'>

            <div className='icons'>
            <div id='icons-one'>
                <h4 style={{color:"whitesmoke"}}>Join our social Community</h4><br/>
                <div style={{color:"#f9004d"}}>
                <span><FiFacebook/> </span>
                <span><FiTwitter/></span>
                <span><FiUsers/></span>
                <span><FaTwitter/></span>
                <span><BsInstagram/></span>
               <span><FaWordpressSimple/></span> 
                <span><FaDownload/></span>
                </div><br/>
                <pre><br/>
                    <h4>Help Center</h4>
                    Contact Us<br/>
                    Video Community<br/>
                    Support Center<br/>
                    Activation & Registration<br/>
                    Account
                </pre>
                </div>

                <div className='footer-main' style={{paddingTop:"15px"}}>
          <img src='./app-store1.png'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
          <img src='./play-store.png'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/><br/><br/>
          <h4 style={{color:"white"}}>Phone support: +254-700-400-200</h4><br/>
          <button><a href='#'><Link to = "/helpcenter"> Contact us</Link></a></button> &nbsp; &nbsp; &nbsp; 
          <button><a href='#'><Link to = "/"> Home</Link></a></button><br/>
          <br/>
          <h4 style={{color:"white"}}>@ Nyakuwa Mall Date:{year}</h4>
            </div> 
                
                <div id='icons-two'>
                    <div style={{display:'flex',justifyContent:'space-evenly' ,gap:'5px'}}>
                <img src='./logo1.jpeg' style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                <img src='./logo2.png'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                <img src='./logo3.png'style={{with:'80px', height:'70px' , borderRadius:'8px'}}/>
                
                </div><br/>
                <pre>
                    <h3 style={{color:"whitesmoke"}}>TRACKING METHOD </h3><br/>
                <img src='./path.webp' style={{with:'80px', height:'70px' , borderRadius:'8px'}}/><br/>
                <img src='./logo4.png'style={{with:'80px', height:'70px' , borderRadius:'8px', paddingBottom:"8px"}}/>
                </pre>
                </div>
                
            
          
        </div> 
    </div>
  )
}

export default Footer