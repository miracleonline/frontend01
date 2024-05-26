import React, { useEffect } from 'react';
// import '../CSS/AdminDashboard.css'; // Import your CSS file here
import Badge from '@mui/material/Badge';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from "../AdminComponents/fixlogo.jpg"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { colors } from '@mui/material';
import  { Link, useNavigate } from 'react-router-dom'
import LayoutHoc from '../Components/LayoutHoc';
import FeedbackDetail from './FeedbackDetail';
import "../CSS/AdminIndex.css";
function AdminIndex() {
  const navigation= useNavigate()
  
    //google translate.
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
    <div>
      <aside>
        <header>
          <div>
            <img className="profile-picture" src="https://us.123rf.com/450wm/flint01/flint011511/flint01151100033/47342705-portrait-of-confident-young-businessman-with-glasses-holding-golden-credit-card-with-right-hand.jpg?ver=6" alt="Profile"/>
            <p>Lorem Dolor</p>
          </div>
        </header>
        <nav className="side-navigation">
          <ul>
          
          <li className="active" onClick={()=>navigation('/admin/listoofservice')}> <a href="#" style={{display:'flex',alignItems:'center'}}><PersonAddAltIcon/>&nbsp;List of Service Team</a></li>
          <li  onClick={()=>navigation('/admin/UpdateSerHistory')}><a href="#" style={{display:'flex',alignItems:'center'}}><ManageAccountsIcon />&nbsp; Update Service History</a></li>
            <li  onClick={()=>navigation('/admin/updatePenSer')}><a href="#" style={{display:'flex',alignItems:'center'}}><ManageAccountsIcon />&nbsp; Update Pending Service Request</a></li>
            <li onClick={()=>navigation('/admin/updateMyEarning')}><a href="#" style={{display:'flex',alignItems:'center'}}><MiscellaneousServicesIcon/>&nbsp; Update My Earnings</a></li>
          <li onClick={()=>navigation('/admin/feedbackDetail')}><a href="#" style={{display:'flex',alignItems:'center'}}><FeedbackIcon/>&nbsp;Service Feedback</a></li>
            <li onClick={()=>navigation('/admin/currPayMode')}><a href="#" style={{display:'flex',alignItems:'center'}}><PendingActionsIcon/>&nbsp;Current Payout Mode</a></li>
            <li><a href="#" style={{display:'flex',alignItems:'center'}}><LogoutIcon/>&nbsp;Session Logout</a></li>
            
           
          </ul>
        </nav>
      </aside>
      <main>
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
       
        <div className="wrapper">
         
          <div className="container">
            {/* Your card components go here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default (AdminIndex);
