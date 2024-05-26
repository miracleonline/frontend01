import React, { useEffect, useState } from 'react'
import "../CSS/Login.css"
import logo from "./fixlogo.jpg"
import LogoutIcon from '@mui/icons-material/Logout';
import { registraionUserBackend } from '../Redux/api';
import { ToastContainer, toast } from 'react-toastify';
import RegistrationForm from './RegistrationForm';
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [data, setdata] = useState('')
    const navigate = useNavigate();
    const RegistraionUserOnclick=async (e)=>{
       try {
        e.preventDefault()
        const userData={
          email, password
        }
        const data=await registraionUserBackend(userData)
        if(data.success==true){
          localStorage.setItem("UserId",data.data._id)
         toast.success(data.msg,{
            position:"top-center",
            autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
            hideProgressBar: false, // Show the progress bar
            className: "custom-toast", // Custom class for styling
          })
          
        setTimeout(() => {
          console.log("Navigating to login page");
          if(data?.data?.role=="user") {
            navigate("/myaccount") 
          }
           else if(data?.data?.role=="admin"){
            navigate('/admin')
           }
        }, 3000);

       

        }else{
       return toast.error(data.response.data.msg,{
            position:"top-center",
            autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
            hideProgressBar: false, // Show the progress bar
            className: "custom-toast", // Custom class for styling
          })
        }
      
        
        console.log(data.data);
       
       } catch (error) {
        console.log(error)
       }
    }

 



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
      

  return (
    <div className='login-container-main'>
    <div className="registration-main-head">
          <div  className="profilepic">
          <div className='logo-img' style={{marginLef:"2%"}}><img src={logo} alt="logo" /></div>
           {/* <div className='notif-div'> <NotificationsNoneIcon style={{color:"#00afb5", fontSize:"35px", border:"1 px solid "}}  /> <p className='notif-ptag'> 3</p></div> */}
           <div id="google_translate_element"></div>
          
           {/* <div className='LogoutIcon'><LogoutIcon style={{fontSize:"35px"}} /></div> */}
           <button className='Signup-Button' id='Signup-Button-id' onClick={() => navigate("/registration")}>Registration</button>
          </div> 
         
          
         
          
          
        </div>



    <div  className='login-container' style={{width:"60%"}}>
        <div className='img-container'>
        {/* <div> <img className='login-logo' src={logo} alt="" /></div> */}
        <div >
            <img className='login-gif' src="https://cdn.pixabay.com/animation/2023/02/14/07/39/07-39-46-80_512.gif" alt="" />
        </div>
        </div>
       
        <div className='login-form-container'>



        <form action="" className='form-section'>
       <h3>Login Form</h3>
       
       <div className='login-InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Email ID</p>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" value={email} placeholder= "example@gmail.com"/>
       </div>
      
       <div className='login-InputContainer'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Password</p>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="" value={password} placeholder='Enter your password'/>
       </div>
       
       
       <button className='login-Button' onClick={RegistraionUserOnclick} >Register Now</button>
     
       <div style={{display:"flex", justifyContent:"space-between" ,marginTop:"2%"}}>
        <div> <Link style={{color:"red", fontWeight:"500"}} to="/registration">Registration</Link></div>
        <div><Link rel="stylesheet" style={{color:"red", fontWeight:"500"}} href="" >Forgot Password  </Link></div>
        </div>
      
      </form> 
      
  
        </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Login