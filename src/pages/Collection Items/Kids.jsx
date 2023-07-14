import React from 'react'
import './Kids.css'
import { Link } from 'react-router-dom'

function Kids() {
    
    return (
        <div className="kids-main">
    
    {/* containers for card purchases */}
      
    
        <div className="card-container">
        <div className="cards">
            <div className="image">
        <img src='./kid1.jpg'/>
            </div>
            <div className="title">
        <h2>Serene Haven Red</h2>
            </div>
            <div className="description">
        <pre>Fashion Women's Floral Sleeve Office <br/>
        Brand: Long Grown Dresses - Red<br/><br/>
        Price: $2,500<br/>
        </pre>
            </div>
            <div className="next">
            <button><Link to="/place order"> Add to Cart</Link></button>
                     </div>
                 </div>
            
            {/* second container */}
    
           
        <div className="cards">
            <div className="image">
        <img src='./kid2.jpg'/>
            </div>
            <div className="title">
        <h2>Serene Haven Red</h2>
            </div>
            <div className="description">
        <pre>Fashion Women's Floral Sleeve Office <br/>
        Brand: Long Grown Dresses - Red<br/><br/>
        Price: $2,500<br/>
        </pre>
            </div>
            <div className="next">
            <button><Link to="/place order"> Add to Cart</Link></button>
                     </div>
                 </div>
        
    
       {/* third */}
      
        <div className="cards">
            <div className="image">
        <img src='./kid3.jpg'/>
            </div>
            <div className="title">
        <h2>Serene Haven Red</h2>
            </div>
            <div className="description">
        <pre>Fashion Women's Floral Sleeve Office <br/>
        Brand: Long Grown Dresses - Red<br/><br/>
        Price: $2,500<br/>
        </pre>
            </div>
            <div className="next">
            <button><Link to="/place order"> Add to Cart</Link></button>
                     </div>
                 </div>
            
            {/* forth */}
    
        
        <div className="cards">
            <div className="image">
        <img src='./kid.jpg'/>
            </div>
            <div className="title">
        <h2>Serene Haven Red</h2>
            </div>
            <div className="description">
        <pre>Fashion Women's Floral Sleeve Office <br/>
        Brand: Long Grown Dresses - Red<br/><br/>
        Price: $2,500<br/>
        </pre>
            </div>
            <div className="next">
            <button><Link to="/place order"> Add to Cart</Link></button>
                     </div>
                 </div>
            
            {/* fifth */}
    
           
        <div className="cards">
            <div className="image">
        <img src='./kid6.jpg'/>
            </div>
            <div className="title">
        <h2>Serene Haven Red</h2>
            </div>
            <div className="description">
        <pre>Fashion Women's Floral Sleeve Office <br/>
        Brand: Long Grown Dresses - Red<br/><br/>
        Price: $2,500<br/>
        </pre>
            </div>
            <div className="next">
            <button><Link to="/place order"> Add to Cart</Link></button>
                     </div>
                 </div>
            
            {/* sixth */}
           
        <div className="cards">
            <div className="image">
        <img src='./kid3.jpg'/>
            </div>
            <div className="title">
        <h2>Serene Haven Red</h2>
            </div>
            <div className="description">
        <pre>Fashion Women's Floral Sleeve Office <br/>
        Brand: Long Grown Dresses - Red<br/><br/>
        Price: $2,500<br/>
        </pre>
            </div>
            <div className="next">
            <button><Link to="/place order"> Add to Cart</Link></button>
                     </div>
                 </div>
            </div>
    
            </div>
    
      )
      
    }

export default Kids