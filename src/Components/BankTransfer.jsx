import React, { useEffect, useState } from 'react'
import "../CSS/BankTransfer.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { GetMyPaymentDetails, UpdateMyPaymentDetails } from '../Redux/api';
import { ToastContainer, toast } from 'react-toastify';


// {AccountHold,UserId,AccountNumber,BankName,paypalLink,otherPaymentLink,BankAddress,SWIFTCode,IFSCCode,MobileNumber,YourAddress}


const BankTransfer = () => {
  

  const [name, setName]= useState("");
  const [AccountHold,setAccountHold]=useState("");
  const [AccountNumber,setAccountNumber]=useState("");
  const [BankName,setBankName]=useState("");
  const [BankAddress,setBankAddress]=useState("");
  const [SWIFTCode,setSWIFTCode]=useState("");
  const [IFSCCode,setIFSCCode]=useState("");
  const [MobileNumber,setMobileNumber]=useState("");
  const [YourAddress,setYourAddress]=useState("");
  const [detaildata,setdetaildata]=useState({});
  const [UserId,setUserId]=useState("")
  useEffect(()=>{
    const id=localStorage.getItem("UserId");
    setUserId(id);
    if(id){
      fetchDetails(id)
    }
  },[])
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const payload={AccountHold,UserId,AccountNumber,BankName,BankAddress,SWIFTCode,IFSCCode,MobileNumber,YourAddress};
      const {data,msg}=await UpdateMyPaymentDetails(payload);
      toast.success(msg,{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      });

  }
  const fetchDetails=async(id)=>{
    const {data}=await GetMyPaymentDetails(id);
    setdetaildata(data);
  }
  return (
    <div className='BankTransfer'>

     <form action="" className='Bank-FormContainer'>
       <h3 >Bank Transfer</h3>
       
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Name of the Account Holder</p>
        <input type="text" onChange={(e)=>setAccountHold(e.target.value)} name="" id="" required placeholder= "Enter Account Holder Name"/>
       </div>
    
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Account Number</p>
        <input type="number" onChange={(e)=>setAccountNumber(e.target.value)} name="" id="" required placeholder= "Enter  your account number"/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span> Bank Name</p>
        <input type="text" onChange={(e)=>setBankName(e.target.value)} name="" id="" required placeholder= "Enter  your bank name"/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span> Bank Address</p>
        <input type="text" onChange={(e)=>setBankAddress(e.target.value)} name="" id="" required placeholder= "Enter  your bank address"/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>SWIFT Code</p>
        <input type="text" onChange={(e)=>setSWIFTCode(e.target.value)} name="" id="" placeholder='Enter your SWIFT code'/>
       </div>
       <div className='InputContainer'>
        <p>IFSC Code [If not then ignore]</p>
        <input type="text" onChange={(e)=>setIFSCCode(e.target.value)} name="" id="" placeholder='Enter  IFSC code'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span> Mobile Number</p>
        <input type="text" onChange={(e)=>setMobileNumber(e.target.value)} name="" id="" placeholder='Enter your  mobile number' required/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span> Your Address</p>
        <input type="text" onChange={(e)=>setYourAddress(e.target.value)} required name="" id="" placeholder='Enter your password'/>
       </div>
       <button style={{backgroundColor: "red"}} className='SignUp-Button' onClick={handleSubmit} >Update Details</button>
     
     
      </form> 
     


     <div style={{ width:"600px" ,marginTop:"2%"}}>
     
       <h3 >Bank Transfer Details</h3>
       
       <div className='InputContainer'>
        <p>Name of the Account Holder :{detaildata?.AccountHold}</p>
       
       </div>
    
       <div className='InputContainer'>
        <p>Account Number :{detaildata?.AccountNumber}</p>
        
       </div>
       <div className='InputContainer'>
        <p> Bank Name :{detaildata?.BankName}</p>
        
       </div>
       <div className='InputContainer'>
        <p> Bank Address :{detaildata?.BankAddress}</p>
       
       </div>
       <div className='InputContainer'>
        <p>SWIFT Code :{detaildata?.SWIFTCode}</p>
       
       </div>
       <div className='InputContainer'>
        <p>IFSC Code :{detaildata?.IFSCCode}</p>
       
       </div>
       <div className='InputContainer'>
        <p> Mobile Number :{detaildata?.MobileNumber}</p>
      
       </div>
       <div className='InputContainer'>
        <p> Your Address :{detaildata?.BankAddress}</p>
       
       </div>
       <div className='InputContainer'>
        <p> Paypal Link :{detaildata?.otherPaymentLink}</p>
       
       </div>
       <div className='InputContainer'>
        <p> Other Payment Link :{detaildata?.paypalLink}</p>
       
       </div>
      
       <ToastContainer />
     
      


     </div>

    </div>
  )
}

export default BankTransfer