import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='mb-5'>Trust with Confidence</h1>
                    <h2 className='fs-4'>User-First Always</h2>
                    <p className='text-muted'>Customers should always be able to trust us with their eyes closed,that's our priority</p>
                    <h2 className='fs-4'>No Spams</h2>
                    <p className='text-muted'>No gimmicks,spam,or "gamification" or any annoying notifications. Website that runs at your pace,as you want</p>
                    <h2 className='fs-4'>Do better with your hard earned Money</h2>
                    <p className='text-muted'>With various features, we don't just facilitate transactions, but help you to do better with your Money</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='Media/images/ecosystem.png' style ={{width : "90%"}}/>
                    <div className='text-center'>
                        <a href = '' className='mx-5'> Explore more </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;