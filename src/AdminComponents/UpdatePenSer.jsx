import React, { useEffect, useState } from 'react';
import "../CSS/UpdatePayoutDetail.css";
import CountrySelect from './CountrySelect';
import NameSelect from './NameSelect';
import ProfectionSelect from './ProfectionSelect';
import "../CSS/ListofService.css"
import UpdatepenCard from './UpdatepenCard';
import AdminLayoutHoc from './AdminLayoutHoc';
import AddPendingCard from './Card/AddPendingCard';
import { getUpdateServiceListBackend } from '../Redux/api';

const UpdatePenSer = () => {
  const [adatas ,setDatas]=useState([]);
  const [edit,setedit]=useState(false);
  const [ClientName,setClientName]=React.useState("");
  const [Country,setCountry]=React.useState("");
  const [Proffesion,setProffesion]=React.useState("");




  useEffect(()=>{
    getPendingService();
   },[edit,ClientName,Proffesion,Country])
   useEffect(()=>{

   },[adatas])

 
   const getPendingService=async()=>{
    
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

      const {data}=await getUpdateServiceListBackend(name,country,proffesion);
      setDatas(data)
      console.log(data)
  
  
  }

  return (
    
    <div id='UpdatePenSer-main' style={{ width: "70%", marginLeft: "25%"}}>

       
      <div  >
        <h2  className='Current-mode'>Update Pending Service Request</h2>
       
      </div>
    
      <div className="form-choise" style={{ width:"85%", marginLeft:"8%"}}>

        <div className='filter-select' style={{ display: "flex", justifyContent: "space-between"  }}>
          {/* Button clicks set the corresponding payment mode */}
          <div  className='CountrySelect-class' ><CountrySelect setDatas={setDatas} Country={Country} setCountry={setCountry}/></div>
          <div  className='CountrySelect-class'><ProfectionSelect setDatas={setDatas} setProffesion={setProffesion} /></div>
          <div  className='CountrySelect-class'><NameSelect Proffesion={Proffesion} setDatas={setDatas} ClientName={ClientName} setClientName={setClientName}  /></div>
        </div>
       
      </div>
      <div style={{marginLeft:"5%", marginTop:"2%"}}><AddPendingCard setedit={setedit}/></div>
      <div id='Updatecard' className='ListDiv'>
       
       {adatas &&adatas.map((item)=>(
        <UpdatepenCard datas={item} key={item?._id} setedit={setedit}/>
       ))
     }
       
        </div>
     

    
    </div>
  );
}

export default AdminLayoutHoc(UpdatePenSer);
