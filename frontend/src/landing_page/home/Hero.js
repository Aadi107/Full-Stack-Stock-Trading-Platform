import React from 'react';

 function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center '>
                <img src='Media/images/homeHero.png' alt = 'Hero Image' className='mb-5' />
                <h1 className = 'mt-5'> 
                    Invest in Anything you want
                </h1>
                <p>
                    Online platform to invest in Stocks, Mutual Funds and others... 
                </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style= {{width:"25%",margin: "0 auto"}}> Let's Dive in!!! </button>

            </div>
            
        </div>
     );
 }
 
 export default Hero;