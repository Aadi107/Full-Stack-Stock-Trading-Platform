import React from 'react';

function Pricing() {
    return ( 
        <div className='container b-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>
                        Unbeatable Pricing
                    </h1>
                    <p>
                        We aim to bring more price transparency and discounted broking. No hidden charges.
                    </p>

                    <a href = '' className='mx-5`'> See Pricing </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-5 border'>
                          <h1 className='mb-3'>$0 </h1>
                          <p>Free equity delivery and<br/> direct mutual funds </p>
                        </div>
                        <div className='col p-5 border'>
                          <h1 className='mb-3'>$0 </h1>
                          <p>Intraday & F&O </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;