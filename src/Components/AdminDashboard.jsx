import React, { useEffect } from 'react';
import '../CSS/AdminDashboard.css'; // Import your CSS file here
import Badge from '@mui/material/Badge';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from "./fixlogo.jpg"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditIcon from '@mui/icons-material/Edit';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { colors } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import axios from "axios";
import { GetSingleUser } from "../Redux/api";
import { useState } from 'react';

function Dashboard() {
  const [datas ,setDatas]=useState([])




  const navigation= useNavigate();
      //google translate.
      useEffect(()=>{
     
        const getUser=async()=>{
          const UserId=localStorage.getItem("UserId");
          if(UserId){
            const {data}=await GetSingleUser(UserId)
            setDatas(data)
            console.log(data)
          }
        
        }
        getUser()


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
    <div >
      <aside>
        <header>
          <div>
            <img className="profile-picture" src={data.uploadpic} alt="Profile"/>
            <p>{data._Id.name}</p> 
                     </div>
        </header>
        <nav className="side-navigation">
          <ul>
          
          <li className="active" onClick={()=>navigation('/registration')}> <a href="#" style={{display:'flex',alignItems:'center'}}><PersonAddAltIcon/>&nbsp; Registration</a></li>
            <li  onClick={()=>navigation('/myaccount')}><a href="#" style={{display:'flex',alignItems:'center'}}><ManageAccountsIcon />&nbsp; My Account</a></li>
            <li onClick={()=>navigation('/myservice')}><a href="#" style={{display:'flex',alignItems:'center'}}><MiscellaneousServicesIcon/>&nbsp; My Service History</a></li>
            <li onClick={()=>navigation('/pendingservic')}><a href="#" style={{display:'flex',alignItems:'center'}}><PendingActionsIcon/>&nbsp;Pending Service Request</a></li>
            <li onClick={()=>navigation('/myearning')}><a href="#" style={{display:'flex',alignItems:'center'}}><AttachMoneyIcon/>&nbsp; My Earnings</a></li>
            <li onClick={()=>navigation('/updatePay')}><a href="#" style={{display:'flex',alignItems:'center'}}><CurrencyExchangeIcon/>&nbsp;Update Payout Detail</a></li>
            <li onClick={()=>navigation('/feed')}><a href="#" style={{display:'flex',alignItems:'center'}}><FeedbackIcon/>&nbsp;Service Feedback</a></li>
            <li onClick={()=>navigation('/supportAccount')}><a href="#" style={{display:'flex',alignItems:'center'}}><ContactSupportIcon/>&nbsp;Support Account</a></li>
            <li onClick={()=>navigation('/faq')}><a href="#" style={{display:'flex',alignItems:'center'}}><SupportAgentIcon/>&nbsp;faq</a></li>
          </ul>
        </nav>
      </aside>
      <main className='main-head-first'>
        <header className="main-head">
          <div  class="profilepic">
          <div className='logo-img'><img src={logo} alt="logo" /></div>
           <div className='notif-div'> <NotificationsNoneIcon style={{color:"#00afb5", fontSize:"35px", border:"1 px solid "}}  /> <p className='notif-ptag'> 3</p></div>
           <div id="google_translate_element"></div>
          
           <div className='LogoutIcon'><LogoutIcon style={{fontSize:"35px"}} /></div>
          </div> 
         
          
          {/* <div className="search">
          <ul >
              <li><a href="#" data-title="Edit profile"><EditIcon/> </a></li>
              <li><a href="#" data-title="Sign out"></a></li>
            </ul>
          </div> */}
          
          
        </header>
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
        <div className="wrapper">
          {/* <ul className="category-navigation">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">Admins</a></li>
            <li><a href="#">Knowledge board</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Q&A</a></li>
          </ul> */}
          <div className="container">
            {/* Your card components go here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;



