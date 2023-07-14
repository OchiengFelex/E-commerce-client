import React from 'react'
import './Collection.css'
import { Link } from 'react-router-dom'



function Collection() {
  return (
    <div className="main-collections"> 
    {/* main -container that act as the body */}
        <div className="collection-head">  
            <h1>FIND ALL YOUR COLLECTION OF CHOICE</h1>
        </div>
        <div className="cont"> 
        {/* collection container that contain all the cards */}
        <div className="collections-container">
        <div className="men">
        <div className="image">
    <img src='./men_fashion.jpg'/>
       </div>
        <div className="description">

        <div className="title">
    <h2>Stylish Men Clothes</h2>
        </div>

    <pre >Luxurious suits with stunning views<br/>
    outstanding attractive at fair price.<br/>
    Price: $15
    </pre><br/>
    <div className="next">
        <button><Link to = "/men"> Click for more </Link></button>
                     </div>
                  </div>
             </div>
        </div>


{/*  */}

        <div className="collections-container">
        <div className="men">
        <div className="image">
    <img src='./women-clothes.png'/>
       </div>
        <div className="description">

        <div className="title">
    <h2>Stylish Women Clothes</h2>
        </div>

    <pre >Luxurious suits with stunning views<br/>
    outstanding attractive at fair price.<br/>
    Price: $15
    </pre><br/>
    <div className="next">
        <button><Link to = "/women"> Click for more </Link></button>
                     </div>
                  </div>
             </div>
        </div>






        <div className="collections-container">
        <div className="men">
        <div className="image">
    <img src='./Kids-Clothes.webp'/>
       </div>
        <div className="description">

        <div className="title">
    <h2>Stylish Kids Clothes</h2>
        </div>

    <pre >Luxurious suits with stunning views<br/>
    outstanding attractive at fair price.<br/>
    Price: $15
    </pre><br/>
    <div className="next">
        <button><Link to = "/kids"> Click for more </Link></button>
                     </div>
                  </div>
             </div>
        </div>


     </div>

        </div>

  )
}

export default Collection