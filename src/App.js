import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import RegistrationForm from "./Components/RegistrationForm"
import MyService from "./Components/MyService"
import MyAccount from './Components/MyAccount';
import PendingService from './Components/PendingService';
import MyEarning from './Components/MyEarning';
import UpdatePayoutDetail from './Components/UpdatePayoutDetail';
import BankTransfer from './Components/BankTransfer';
import FeedbackForm from './Components/FeedbackForm';
import Faq from './Components/Faq';
import Login from './Components/Login';
import AdminIndex from './AdminComponents/AdminIndex';
import UpdatePenSer from './AdminComponents/UpdatePenSer';
import UpdateMyEarning from './AdminComponents/UpdateMyEarning';
import CardCurrPayMode from './AdminComponents/Card/CardCurrPayMode';
import CurrPayMode from './AdminComponents/CurrPayMode';
import FeedbackDetail from './AdminComponents/FeedbackDetail';
import SupportAccount from './Components/SupportAccount';
import "./AdminComponents/AdminLayoutHoc";
import Signup from './Components/Signup';
import UpdateServiceHistory from './AdminComponents/UpdateServiceHistory';


function App() {
  
  return (
    <Router>
      <Routes>
       <Route path='/' element={<MyAccount />}/>
       <Route path='/registration' element={<RegistrationForm/>} />
       <Route path="/myaccount" element={<MyAccount />}/>
       <Route path="/myservice" element={< MyService/>}/>
       <Route path="/pendingservice" element={<PendingService/>}/>
       <Route path="/myearning" element={<MyEarning/>}/>
       <Route path="/updatePayoutDetail" element={<UpdatePayoutDetail/>}/>
       <Route path="/bankTransfer" element={<BankTransfer/>}/>
       <Route path="/feed" element={<FeedbackForm />}/>
       <Route path="/supportAccount" element={<SupportAccount />}/>
       <Route path="/Registration" element={<Signup/>}/>
       <Route path="/faq" element={<Faq />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/admin" element={<ListofService />}/>  
       <Route path="/admin/listoofservice" element={<ListofService />}/>
       <Route path="/admin/UpdateSerHistory" element={<UpdateServiceHistory />}/>
       <Route path="/admin/updatePenSer" element={<UpdatePenSer />}/>
       <Route path="/admin/currPayMode" element={<CurrPayMode />}/>
       <Route path="/admin/feedbackDetail" element={<FeedbackDetail />}/> 
      </Routes>
    </Router>
  );
}

export default App;

