import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css' // Importing the CSS file for this component
import {AiOutlineStar} from 'react-icons/ai'

function Home() {
  return (
    <div className='main-home'>
        <div className="home-contents">
            <div className="content1">
                <h1>
                    FIND ALL COLLECTION OF<br/>
                    FASHION CLOTHES JUST AT<br/>
                    ONE PLACE<br/>
                </h1><br/>
            <pre>Discover fashion's finest at Nyakuwa Mall.<br/>
                 Step into a world of style with our curated<br/>
                 collection of trendy and timeless fashion <br/>
                clothes. Unleash your inner fashionista today<br/>
                 and elevate your wardrobe today.</pre><br/>
                <button> <Link to='/collections'> SHOP NOW </Link> </button>

            </div>
            <div className="content2">
                <img src= "/home2.jpg" />
                <img src= "/home1.jpg" />
            </div>

        </div>
        <div className="home-section" style={{display:"flex"}}>
            
                <img src= "/kitenge.jpg"  className='image'/>
               <div className="add">
                <h2>NEW ARRIVALS<br/><br/>
                WE GOT YOU COVERED</h2><br/>
                <div className="star">
                <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
                </div>
               </div>
            

            </div>
        </div>
   
  )
}

export default Home