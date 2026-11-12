import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='Media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h1>An Online Stock broking platform in India</h1>
                    <p className='mb-5'>Be one of the firsts to contribute to all retail order volumes in India by trading and investing daily in:</p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                        </ul>
                    </div>

                    <div className='col-6'>
                      <ul>
                            <li>
                            <p>Stocks and IPOs</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Securities</p>
                        </li>
                      </ul>
                    </div>
                </div>
    
                        
                </div>
            
            </div>

        </div>
     );
}

export default Awards;