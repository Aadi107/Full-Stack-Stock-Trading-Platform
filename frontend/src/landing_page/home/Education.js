import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='Media/images/education.svg' style ={{width : "90%"}}/>
                </div>
                <div className='col-4'>
                    <h1 className='mb-3'>
                        Free and Open Market Education
                    </h1>
                    <p>
                        Varsity, the largest online stock market education book in the world that covers everything!!!
                    </p>

                    <a href = '' className='mx-5`'> Varsity </a>

                    <p className='mt-5'>
                        Trading Q&A, one of the most active trading and investment community in India.
                    </p>

                    <a href = '' className='mx-5`'> Trading Q&A </a>
                </div>
            </div>
        </div>
     
     );
}

export default Education;