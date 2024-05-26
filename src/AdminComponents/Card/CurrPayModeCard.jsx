import React, { useEffect, useState } from 'react'
import "../../CSS/CurrPayModeCard.css"
import { GetAllPaymenyDetailBackend } from '../../Redux/api';
import { Await } from 'react-router-dom';

// CurrPayModeCard.css

const CurrPayModeCard = ({data}) => {
   

  return (
    
<div className='CurrPayModeCard'  style={{marginTop:"7%"}}>
     
     
     
     <div className='CurrPay-InputContainer'>

      <div className='InputContainer-1'>Name of the Account Holder :</div> <div>{data.AccountHold}</div>
     
     </div>
     
  
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'>Account Number :</div> <div>{data?.AccountNumber}</div>
      
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'> Bank Name :</div> <div>{data?.BankName}</div>
      
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'> Bank Address :</div> <div>{data?.BankAddress}</div>
     
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'>SWIFT Code :</div> <div>{data?.SWIFTCode}</div>
     
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'>IFSC Code :</div> <div>{data?.IFSCCode}</div>
     
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'> Mobile Number:</div> <div>{data?.MobileNumber}</div>
    
     </div>
     <div className='CurrPay-InputContainer'>
        <div className='InputContainer-1'> Your Address :</div> <div>{data?.BankAddress}</div>
     
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'> Paypal Link :</div> <div>{data?.paypalLink}</div>
     
     </div>
     <div className='CurrPay-InputContainer'>
      <div className='InputContainer-1'> Other Payment Link :</div> <div>{data?.otherPaymentLink}</div>
     
     </div>
    
   
   
    


   </div>

    
  )
}

export default CurrPayModeCard