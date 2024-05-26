import React, { useEffect, useState } from 'react'
import "../CSS/BankTransfer.css"
import { ToastContainer, toast } from 'react-toastify';
import { UpdateMyPaymentDetails } from '../Redux/api';





const PaymentLink = () => {
  const [otherPaymentLink,setotherPaymentLink]=useState("");
  const [UserId,setUserId]=useState("")

  useEffect(()=>{
    
    setUserId(id);
    
  },[])
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const payload={UserId,otherPaymentLink};
    const {data,msg}=await UpdateMyPaymentDetails(payload);
    toast.success(msg,{
      position:"top-center",
      autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
      hideProgressBar: false, // Show the progress bar
      className: "custom-toast", // Custom class for styling
    });

}

  
  return (
    <div className='BankTransfer'>

     <form action="" className='Bank-FormContainer'>
       <h3>Payment Link</h3>
       
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Enter the Payment Link</p>
        <input type="text" onChange={(e)=>setotherPaymentLink(e.target.value)} value={otherPaymentLink} name="" id="" required placeholder= "Enter the Payment Link"/>
       </div>
    
      
       <button style={{backgroundColor: "red"}} className='SignUp-Button' onClick={handleSubmit} >Pay Now</button>
     
     
      </form> 
     <ToastContainer />

    </div>
  )
}

export default PaymentLink