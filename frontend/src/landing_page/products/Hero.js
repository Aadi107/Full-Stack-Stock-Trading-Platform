import React from 'react';

function Hero() {
    return (
        <div className='container text-center mt-5 p-3 border-bottom mb-5'>
            <h1>Technology</h1>
            <h3 className='text-muted mt-3 fs-4'>Sleek and Modern Trading Platform </h3>
            <p className='mt-3 mb-5'>
                Check out our {" "}
            <a href="/products" style={{ textDecoration : "none"}}>
               investment offerings
            <i className = "fa-solid fa-long-arrow-right" aria-hidden ="true"></i>    
            </a>
            </p>
        </div>
      );
}

export default Hero;