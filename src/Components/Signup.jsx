import React, { useEffect, useState } from 'react'
import "../CSS/RegistrationForm.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LayoutHoc from './LayoutHoc';
import CountrySelect from '../AdminComponents/CountrySelect';
import axios from 'axios';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "./fixlogo.jpg"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { registraionUser } from '../Redux/api';
import { setLoginUser } from '../Redux/AuthSlice/AuthSlice';

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

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
  const [datas ,setDatas]=useState([])
  const dispatch=useDispatch();
  const [requiredFields, setRequiredFields] = useState([]);



  useEffect(()=>{
     

  function loadGoogleTranslateScript() {
    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById('google-translate-script');
      if (existingScript) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate';
      script.id = 'google-translate-script';
      script.async = true;
      script.onerror = reject;
      document.body.appendChild(script);
      script.onload = resolve;
    });
  }

  window.initGoogleTranslate = () => {
    if (!window.google.translate.TranslateElement) {
      console.error('Google Translate is not available');
      return;
    }
    // Initialize Google Translate once the script is loaded
    new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  };

  // Load Google Translate script
  loadGoogleTranslateScript()
    .then(() => {
      console.log('Google Translate script loaded successfully');
    })
    .catch((error) => {
      console.error('Error loading Google Translate script:', error);
    });

  return () => {
    // Clean up: remove the initGoogleTranslate function from the window object
    window.initGoogleTranslate = null;
  };

  
},[])
useEffect(() => {
  const requiredFieldsArray = [
    { name: 'email', label: 'Email ID' },
    { name: 'Picture', label: 'Upload Your Picture' },
    { name: 'FirstName', label: 'First Name' },
    { name: 'LastName', label: 'Last Name' },
    { name: 'Country', label: 'Country' },
    { name: 'Profession', label: 'Profession Type' },
    { name: 'GovtID', label: 'Upload Govt. Issued ID' },
    { name: 'Contact', label: 'Contact' },
    { name: 'password', label: 'Set Your Password' },
    { name: 'Street', label: 'Street Name' },
    
  ];
  setRequiredFields(requiredFieldsArray);
}, []);
  

const validateForm = () => {
  let isValid = true;
  const requiredFieldsNames = requiredFields.map(field => field.name);
  requiredFieldsNames.forEach(fieldName => {
    const fieldValue = eval(fieldName);
    if (fieldValue === '') {
      isValid = false;
   
    }
  });
  return isValid;
};

  const RegistrationFormOnclick= async(e)=>{
  
    try {
     
      e.preventDefault();
      
    
      if (validateForm()) {
        toast.error("Please fill in all required fields.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          className: "custom-toast",
        });
        return;
      }
     const userData={
       Country, email,uploadpic:Picture,firstName:FirstName,middleName:MiddleName, lastName:LastName, professionType:Profession,govtId:GovtID,password:password,contact:Contact, address:Address,houseNo:HouseNo,streetName:Street,landmark:Landmark,pinCode:PinCode
     }
     const formData = new FormData();

     // Iterate over the userData object and append each field to the FormData object
    

    
      const data =await registraionUser(formData);
      if(data.success==true){
        console.log(data);
        localStorage.setItem("UserId",data._id);
        dispatch(setLoginUser(data));
        
        console.log("Navigating to login pageaaaa");
        toast.success(data.msg,{
          position:"top-center",
          autoClose: 2000, // Auto-close the toast after 5000 milliseconds (5 seconds)
          hideProgressBar: false, // Show the progress bar
          className: "custom-toast", // Custom class for styling
      
        })
       
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
    <div className='main-head-first-parent'>
     
        <div className="registration-main-head">
          <div  class="profilepic">
          <div className='logo-img'><img src={logo} alt="logo" /></div>
           {/* <div className='notif-div'> <NotificationsNoneIcon style={{color:"#00afb5", fontSize:"35px", border:"1 px solid "}}  /> <p className='notif-ptag'> 3</p></div> */}
           <div id="google_translate_element"></div>
          
           {/* <div className='LogoutIcon'><LogoutIcon style={{fontSize:"35px"}} /></div> */}
           <button className='Signup-Button' id='Signup-Button-id' onClick={() => navigate("/login")}>Login</button>
          </div> 
         
          
         
          
          
        </div>
        {/* <div className="container user">
          <div className="user-card">
            <figure><img src="https://us.123rf.com/450wm/flint01/flint011511/flint01151100033/47342705-portrait-of-confident-young-businessman-with-glasses-holding-golden-credit-card-with-right-hand.jpg?ver=6" alt="User"/></figure>
            <div className="user-info">
              <div className="name">
                <span>Lorem Dolor</span>
                <i className="fa fa-star on"></i>
                <i className="fa fa-star on"></i>
                <i className="fa fa-star on"></i>
                <i className="fa fa-star on"></i>
                <i className="fa fa-star off"></i>
              </div>
              <div className="user-role">
              Employ &nbsp; &#8226;<a href="#"></a>
              </div>
              <div className="experience-points"><i className="fa fa-coffee"></i>
              </div>
            </div>
          </div>
          
        </div> */}
       
         
      




    <div className='new-signup-Container'>

     <form action="" className='signup-FormContainer'>
       <h3 id='RegistrationForm-heading'>Registration Form</h3>
       
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Email ID</p>
        <input type="email" required onChange={(e)=>setEmail(e.target.value)} value={email} name="email" id="" placeholder= "example@gmail.com"/>
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
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Computer Engineer" control={<Radio />} label="Computer Engineer" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Cleaner" control={<Radio />} label="Cleaner" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Gardener" control={<Radio />} label="Gardener" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Facility Manager" control={<Radio />} label="Facility Manager" />
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
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Address</p>
        <input type="text" onChange={(e)=>setAddress(e.target.value)} value={Address} name="" id="" placeholder='Enter your Address'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>House No</p>
        <input type="text" onChange={(e)=>setHouseNo(e.target.value)} value={HouseNo} name="" id="" placeholder='Enter your House No'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Street Name</p>
        <input type="text" required onChange={(e)=>setStreet(e.target.value)} value={Street} name="" id="" placeholder='Enter your street name'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Landmark</p>
        <input type="text" onChange={(e)=>setLandmark(e.target.value)} value={Landmark} name="" id="" placeholder='Enter your Landmark'/>
       </div>
       <div className='InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Pin Code</p>
        <input type="text" onChange={(e)=>setPinCode(e.target.value)} value={PinCode} name="" id="" placeholder='Enter your pin code'/>
       </div>
       <button id='regBtn' onClick={RegistrationFormOnclick} className='SignUp-Button'  >Register Now</button>
     
     
      </form> 
     
    
    </div>
    </div>
  )
}

export default  (Signup)