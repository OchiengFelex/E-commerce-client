import React from 'react'
import { Link } from 'react-router-dom'
import './Men.css'

function Men() {
    return (
        <div className="Men-main">
    
    {/* containers for card purchases */}
      
    
        <div className="card-container">
        <div className="men-cards">
        <div className="men-image">
        <img src='./men0.jpg'/>
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
    
           
            <div className="men-cards">
            <div className="men-image">
        <img src='./men2.jpg'/>
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
      
       <div className="men-cards">
       <div className="men-image">
        <img src='./men3.jpg'/>
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
    
            <div className="men-cards">
            <div className="men-image">
        <img src='./men5.jpg'/>
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
    
           
            <div className="men-cards">
            <div className="men-image">
        <img src='./men1.jpg'/>
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
           
            <div className="men-cards">
            <div className="men-image">
        <img src='./men4.jpg'/>
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

export default Men