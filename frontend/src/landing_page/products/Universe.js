import React from 'react';

function Universe() {
    return (  
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/smallcaseLogo.png"/>
                    <p classname ="text-small text-muted">Thematic Investment PLatform </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/streakLogo.png" style ={{width : "150px",height:"auto"}}/>
                    <p classname ="text-small text-muted">Algo & Strategy Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/sensibullLogo.svg"/>
                    <p classname ="text-small text-muted">Option Trading Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/zerodhaFundhouse.png" style ={{width : "150px",height:"auto"}} />
                    <p classname ="text-small text-muted">Asset Management </p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/goldenpiLogo.png"/>
                    <p classname ="text-small text-muted">Bonds Trading Platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="Media/images/dittoLogo.png" style ={{width : "150px",height:"auto"}}/>
                    <p classname ="text-small text-muted">Insurance</p>
                </div>
                 <div><button className='p-2 btn btn-primary fs-5 mb-5' 
                 style= {{width:"25%",margin: "0 auto"}}> Signup Now </button>
                 </div>
            </div>
        </div>
    );
}

export default Universe;