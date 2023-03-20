import React from 'react'


export default function Home() {
  return (
    <div className='section' id='hero-section' style={{width: '100vw', minHeight: '400px', backgroundColor: '#e3e3e1'}}>

        <div className="container">
        <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center "style={{minHeight: "400px"}}>
                  <h2 className='text-start'>Get up 30% off <br/> New Arrivals</h2>
              
               <div className='d-inline-block mt-3'>
               <button className="btn bg-red text-white" >Shop Now</button>
               </div>
               </div>
            <div className="col-md-6">
               
               <div className="right_image_box">
                <img src="../images/ecomm-man-hero.png" alt="BodyImage" style={{width: "100%", height:"auto"}} />
               </div>
  
            </div>

            </div>
        </div>
        
        
    </div>


  
  )
}
