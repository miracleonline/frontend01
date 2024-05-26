import React, { useState } from 'react'
import "../CSS/RegistrationForm.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LayoutHoc from './LayoutHoc';
import CountrySelect from '../AdminComponents/CountrySelect';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { registraionUser } from '../Redux/api';
import { setLoginUser } from '../Redux/AuthSlice/AuthSlice';

import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  
  const [email, setEmail] = useState('');
  const [Picture, setPicture] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [MiddleName, setMiddleName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Country, setCountry] = useState('');
  const [Profession, setProfession] = useState('');
  const [GovtID, setGovtID] = useState('');
  const [Contact, setContact] = useState('');
  const [Address, setAddress] = useState('');
  const [HouseNo ,setHouseNo]=useState('') 
  const [Street ,setStreet]=useState('') 
  const [Landmark ,setLandmark ]=useState('') 
  const [PinCode ,setPinCode ]=useState('') 
  const [password, setPassword] = useState('')

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const RegistrationFormOnclick= async(e)=>{
  
    try {
      e.preventDefault()
     const userData={
       Country, email,uploadpic:Picture,firstName:FirstName,middleName:MiddleName, lastName:LastName, professionType:Profession,govtId:GovtID,password:password,contact:Contact, address:Address,houseNo:HouseNo,streetName:Street,landmark:Landmark,pinCode:PinCode
     }
     const formData = new FormData();

     // Iterate over the userData object and append each field to the FormData object
     Object.keys(userData).forEach(key => {
       formData.append(key, userData[key]);
     });

    
      const data =await registraionUser(formData);
      if(data.success==true){
        console.log(data);
        localStorage.setItem("UserId",data._id);
        dispatch(setLoginUser(data));
        navigate("/login")
        console.log("Navigating to login pageaaaa");
        toast.success(data.msg,{
          position:"top-center",
          autoClose: 2000, // Auto-close the toast after 5000 milliseconds (5 seconds)
          hideProgressBar: false, // Show the progress bar
          className: "custom-toast", // Custom class for styling
        })
        setTimeout(() => {
          console.log("Navigating to login page");
          navigate("/login") 
        }, 3000);
       

      }else{
        return toast.error(data.response.data.msg,{
          position:"top-center",
          autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
          hideProgressBar: false, // Show the progress bar
          className: "custom-toast", // Custom class for styling
        })
      }
     
    
     
    } catch (error) {
      console.log(error)
      
    }
  }
  
  return (
    <div className='signup-Container'>

     <form action="" className='signup-FormContainer'>
       <h3 id='RegistrationForm-heading'>Registration Form</h3>
       
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Email ID</p>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} name="" id="" placeholder= "example@gmail.com"/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Upload Your Picture</p>
        <input  type="file" onChange={(e)=>setPicture(e.target.files[0])}  name="" id="" placeholder= ""/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>First Name</p>
        <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={FirstName} name="" id="" placeholder= "Enter your First Name"/>
       </div>
       <div className='InputContainer'>
        <p>Middle Name</p>
        <input type="text" onChange={(e)=>setMiddleName(e.target.value)} value={MiddleName} name="" id="" placeholder= "Enter your Middle Name"/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Last Name</p>
        <input type="text" onChange={(e)=>setLastName(e.target.value)} value={LastName} name="" id="" placeholder= "Enter your Last Name"/>
       </div>

       <div className='InputContainer' >
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Country</p>
        <CountrySelect style={{border:"0px"}} setCountry={setCountry}   />
       </div>

       <div className='InputContainer-div'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Profession Type</p>
        <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Electrician" control={<Radio />} label="Electrician" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Plumber" control={<Radio />} label="Plumber" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Carpenter" control={<Radio />} label="Carpenter" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="ComputerEngineer" control={<Radio />} label="Computer Engineer" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Cleaner" control={<Radio />} label="Cleaner" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Gardener" control={<Radio />} label="Gardener" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="FacilityManager" control={<Radio />} label="Facility Manager" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="other" control={<Radio />}label="other"/>
      </RadioGroup>
      </FormControl>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Upload Govt. Issued ID</p>
        <input type="file" onChange={(e)=>setGovtID(e.target.files[0])}  name="" id="" placeholder='Enter your password'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Set Your Password</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} name="" id="" placeholder='Enter your password'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Contact</p>
        <input type="number" onChange={(e)=>setContact(e.target.value)} value={Contact} name="" id="" placeholder='Enter your contact number'/>
       </div>
       <div className='InputContainer'>
        <p>Address</p>
        <input type="text" onChange={(e)=>setAddress(e.target.value)} value={Address} name="" id="" placeholder='Enter your Address'/>
       </div>
       <div className='InputContainer'>
        <p>House No</p>
        <input type="text" onChange={(e)=>setHouseNo(e.target.value)} value={HouseNo} name="" id="" placeholder='Enter your House No'/>
       </div>
       <div className='InputContainer'>
        <p>Street Name</p>
        <input type="text" onChange={(e)=>setStreet(e.target.value)} value={Street} name="" id="" placeholder='Enter your street name'/>
       </div>
       <div className='InputContainer'>
        <p>Landmark</p>
        <input type="text" onChange={(e)=>setLandmark(e.target.value)} value={Landmark} name="" id="" placeholder='Enter your Landmark'/>
       </div>
       <div className='InputContainer'>
        <p>Pin Code</p>
        <input type="text" onChange={(e)=>setPinCode(e.target.value)} value={PinCode} name="" id="" placeholder='Enter your pin code'/>
       </div>
       <button id='regBtn' onClick={RegistrationFormOnclick} className='SignUp-Button'  >Register Now</button>
     
     
      </form> 
     
      <ToastContainer />
    </div>
  )
}

export default  (RegistrationForm)