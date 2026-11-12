import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
              <h1 className="fs-2">
                To create a ticket, select a relevant topic
              </h1>
              <div className="col-4 p-5 mt-2 mb-2">
              <h5> <i class="fas fa-plus-circle"></i>
                Account Opening
              </h5>
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Resident of Individual</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Minor</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Non Resident Indian (NRI)</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Company, Partnership, HUF and LLP</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Glossary</a>
              </div>

               <div className="col-4 p-5 mt-2 mb-2">
              <h5> <i class="fas fa-user"></i>
                Your Zerodha Account
              </h5>
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Your Profile</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Account Modification</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Nomination</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Transfer and conversion of securities</a>
              </div>

               <div className="col-4 p-5 mt-2 mb-2">
              <h5> <i class="far fa-credit-card"></i>
                Funds
              </h5>
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Add Money</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Withdraw Money</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>Add Bank Accounts</a>
              <br />
              <a href='' style={{textDecoration:"none",lineHeight: "2"}}>eMandates</a>
              <br />
              
              </div>
             
            
            </div> 
        </div>
     );
}

export default CreateTicket;