import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-3" id='supportWrapper'>
              <h3> Support Portal </h3>
              <a href="">Track Tickets</a>
            </div>
            <div className="row p-3 ">
            <div className="col-6 p-3">
                <p className='fs-3'>
                    Search for an answer 
                </p>
                <input placeholder='Ex. How do I activate F&O '/> 
                
                <br/>
                <br/>

                <a href=''className='me-3'>Track Account Opening</a>
                <a href=''className='me-3'>Track Segment Activation</a>
                <a href=''className='me-3'>Intraday Margins</a>
        

            </div>
            <div className="col-6 p-3">
                <div style={{marginLeft : "200px"}}>
                <h1 className='fs-3'>Featured</h1>  
                <br/>
                <ol>
                <li>
                    <a href=''>Kite User Manual</a>
                </li>
                <br/>
                <li>
                    <a href=''>Latest Intraday Leverages</a> 
                </li>
                </ol> 
                
                </div>
            </div>    
              
            </div> 
        </section>
     );
}

export default Hero;