import React, { useEffect, useState } from 'react'
import { getServiceList } from '../Redux/api';
import UserCard from './UserCard';
import AddSerTeamForm from './AddSerTeamForm';
import CountrySelect from './CountrySelect';
import NameSelect from './NameSelect';
import ProfectionSelect from './ProfectionSelect';
import AdminLayoutHoc from './AdminLayoutHoc';



const UpdateServiceHistory = () => {
    const [data, setData] = useState([]);
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

    const {data}=await getServiceList(name,country,proffesion)
    setData(data)
   }
   useEffect(()=>{
    getData()

   },[edit,Country,ClientName,Proffesion])

  return (
    <div className='list-of-ser'>
     
     

       
    <div  >
      <h2  id='h-list' className='Current-mode'>Update Service History</h2>
     
    </div>


  
    <div  className="form-choise" style={{ width:"85%", marginLeft:"8%"}}>
      <div id='form-choise-id' style={{ display: "flex", justifyContent: "space-between"  }}>
      
      <div  className='CountrySelect-class' ><CountrySelect  Country={Country} setCountry={setCountry}/></div>
        <div  className='CountrySelect-class'><ProfectionSelect  setProffesion={setProffesion} /></div>
        <div  className='CountrySelect-class'><NameSelect Proffesion={Proffesion} ClientName={ClientName} setClientName={setClientName}  /></div>
      </div>
     
    </div>

   <div style={{marginLeft:"5%", marginTop:"2%"}}> <AddSerTeamForm setedit={setedit}/></div>
    <div className='ListDiv'>
      {
        data && data.map((item)=>(
          <UserCard data={item} key={item?._id}/>
        ))
      }
      </div>
 
  
     {/* {data?.length && data?.map((item)=>(
      <ListofServiceCard user={item}/>

     ))
     } */}
 
   
  </div>
  )
}

export default AdminLayoutHoc(UpdateServiceHistory)