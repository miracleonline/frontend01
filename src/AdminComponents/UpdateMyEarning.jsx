import React, { useEffect, useState } from 'react';
import CountrySelect from './CountrySelect';
import NameSelect from './NameSelect';
import ProfectionSelect from './ProfectionSelect';
import "../CSS/UpdateMyEarning.css"
import CardUpEarning from './CardUpEarning';
import AdminLayoutHoc from './AdminLayoutHoc';
import AddMyEarning from './Card/AddMyEarning';
import { getUsersAllEarnings } from '../Redux/api';

const UpdateMyEarning = () => {
  const [data,setData]=useState([]);
  const [edit,setedit]=useState(false);
  const [ClientName,setClientName]=React.useState("");
  const [Country,setCountry]=React.useState("");
  const [Proffesion,setProffesion]=React.useState("");
  
   const getData=async()=>{
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

    const {data}=await getUsersAllEarnings(name,country,proffesion)
    setData(data)
   }
   useEffect(()=>{
    getData()

   },[edit,Country,ClientName,Proffesion])

  return (
    
    <div className='UpdateMyEarning-main' style={{ width: "80%", marginLeft: "20%" }}>

       
      <div  >
        <h2 id='h-list' className='Current-mode'>Update My Earning</h2>
       
      </div>
    
      <div  className="form-choise" style={{ width:"85%", marginLeft:"8%"}}>
        <div id='form-choise-id' style={{ display: "flex", justifyContent: "space-between" }}>
        
        <div  className='CountrySelect-class' ><CountrySelect  Country={Country} setCountry={setCountry}/></div>
          <div  className='CountrySelect-class'><ProfectionSelect  setProffesion={setProffesion} /></div>
          <div  className='CountrySelect-class'><NameSelect Proffesion={Proffesion} ClientName={ClientName} setClientName={setClientName}  /></div>
        </div>
       
      </div>
      <div style={{marginLeft:"15%", marginTop:"2%"}}>
      <AddMyEarning setedit={setedit}/>
      </div>
      <div id='CardUpEarning-id' className='ListDiv'>
        <CardUpEarning setedit={setedit} data={data}/>
       
       
        </div>
     

    
    </div>
  );
}

export default AdminLayoutHoc(UpdateMyEarning);
