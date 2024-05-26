import React, { useState } from 'react';
import LayoutHoc from './LayoutHoc';
import "../CSS/UpdatePayoutDetail.css";
import BankTransfer from './BankTransfer';
import PayPal from './PayPal';
import PaymentLink from './PaymentLink';

const UpdatePayoutDetail = () => {
  const [paymentMode, setPaymentMode] = useState(null); // State to track selected payment mode
  const [showImage, setShowImage] = useState(true); // State to track image visibility

  const handleClick = (mode) => {
    setPaymentMode(mode); // Set the selected payment mode
    setShowImage(false); // Hide the image when a button is clicked
  };


  return (
    <div id='payment-main-div' style={{ width: "60%", marginLeft: "30%" }}>
      <div >
        <h2 className='Current-mode'>Current Payout Mode: <span style={{color:"red"}}>{paymentMode}</span> </h2>
        <h3></h3> {/* Display selected payment mode */}
      </div>
      <h6>Select any one of them</h6>
      <div className="form-choise form-choise-payment" >
        <div className="form-choise-two" style={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
          {/* Button clicks set the corresponding payment mode */}
          <div ><button className='payment-choice' onClick={() => handleClick('Bank Transfer')}>Bank Transfer</button></div>
          <div><button className='payment-choice' onClick={() => handleClick('PayPal')}>PayPal</button></div>
          <div><button className='payment-choice' onClick={() => handleClick('Payment Link')}>Payment Link</button></div>
        </div>
      </div>

      {/* Conditionally render image div based on state */}
      

      {/* Render specific div based on selected payment mode */}
      {paymentMode === 'Bank Transfer' && (
        <div>
          {<BankTransfer/>}
        </div>
      )}



    </div>
  );
}

export default (UpdatePayoutDetail);
