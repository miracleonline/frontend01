import React, { useState, useEffect } from 'react';
import CountrySelect from './CountrySelect';
import NameSelect from './NameSelect';
import ProfectionSelect from './ProfectionSelect';
import UserCard from './UserCard';
import UpdatepenCard from './UpdatepenCard';
import CardUpEarning from './CardUpEarning';
import LayoutHoc from '../Components/LayoutHoc';
import CardCurrPayMode from './Card/CardCurrPayMode';
import AdminLayoutHoc from './AdminLayoutHoc';
import CurrPayModeCard from './Card/CurrPayModeCard';
import { GetAllPaymenyDetailBackend } from '../Redux/api';

// Import GetAllPaymenyDetailBackend and useEffect if not already imported

const CurrPayMode = () => {
    const [detaildata, setdetaildata] = useState([]);
    const [edit,setedit]=useState(false);
    const [ClientName,setClientName]=React.useState("");
    const [Country,setCountry]=React.useState("");
    const [Proffesion,setProffesion]=React.useState("");
    
  useEffect(()=>{
    fetchData();
   },[edit,ClientName,Country])

    useEffect(() => {
       
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            let name;
            if(ClientName){
              name=ClientName;
            }
            let country;
            if(Country){
              country=Country
            }
            let proffesion;
            if(Proffesion){
              proffesion=Proffesion
            }
      
            const { data } = await GetAllPaymenyDetailBackend(name,country,proffesion);
            setdetaildata(data);
        } catch (error) {
            console.error('Error fetching payment details:', error);
        }
    };
    return (
        <div style={{ width: "60%", marginLeft: "30%" }}>
            <div>
                <h2 id='h-list' className='Current-mode'>Check PayOut Mode :</h2>
            </div>
            <div className="form-choise" style={{ width: "100%" }}>
                <div id='form-choise-id' style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className='CountrySelect-class'><CountrySelect setCountry={setCountry}  /></div>
                    <div className='CountrySelect-class'><ProfectionSelect setProffesion={setProffesion} /></div>
                    <div  className='CountrySelect-class'><NameSelect Proffesion={Proffesion} ClientName={ClientName} setClientName={setClientName}  /></div>

                </div>
            </div>
            <div className='ListDiv'>
                {detaildata && detaildata.map((item) => (
                    <CurrPayModeCard  data={item} />
                ))}
                {/* <CurrPayModeCard/> */}
            </div>
        </div>
    );
}

export default AdminLayoutHoc(CurrPayMode);
