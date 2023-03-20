import React from 'react'

export default function TopProducts() {
  return (
    <>
       
       <div className="section" id='top-product'>
           
           <h2 className='section-heading my-5 text-center'>Top Products</h2>

           <div className="container">
            <div className="row">
                <div className="col-md-4 mt-3">
                            <div className="card">
            <img src="../images/ecomm-man-hero.png" className="card-img-top" alt="Product"/>
            <div className="card-body border-top">
                <h5 className="card-title text-center">Card title</h5>
                
               <p className='text-center mt-5 mb-0'> <a href="#" className="btn btn-dark">Shop Now</a></p>
            </div>
            </div>  
                        
                </div>
                
            </div>
           </div>

       </div>
    
    
    </>
  )
}
