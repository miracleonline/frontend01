import React, { useEffect, useState } from 'react';
import LayoutHoc from "../Components/LayoutHoc";
import "../CSS/UpdatePayoutDetail.css";
import CountrySelect from './CountrySelect';
import NameSelect from './NameSelect';
import ProfectionSelect from './ProfectionSelect';
import UserCard from './UserCard';
import "../CSS/ListofService.css"
import AdminLayoutHoc from './AdminLayoutHoc';
import AddSerTeamForm from './AddSerTeamForm';
import { GetAllUserBackend, getServiceList } from '../Redux/api';
import ListofServiceCard from './Card/ListofServiceCard';
import UpdateServiceHistory from './UpdateServiceHistory';

const ListofService = () => {

  const [data, setData] = useState([]);
  const [edit,setedit]=useState(false);
  const [ClientName,setClientName]=React.useState("");
  const [Country,setCountry]=React.useState("");
  const [Proffesion,setProffesion]=React.useState("");
  

   const getallUser=async()=>{
    
      try {
        const {data} = await GetAllUserBackend()
      setData(data)
      console.log("data",data)
      } catch (error) {
        console.log(error)
      }
    
   }
   useEffect(()=>{
      getallUser()
   },[])


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

    const {data}=await GetAllUserBackend(name,country,proffesion)
    setData(data)
   }
   useEffect(()=>{
    getData()

   },[edit,Country,ClientName,Proffesion])
  

  return (
    
    <div className='list-of-ser'>
     
     

       
      <div  >
        <h2  id='h-list' className='Current-mode'>List of Service Team </h2>
       
      </div>


    
      <div  className="form-choise" style={{ width:"85%", marginLeft:"8%"}}>
        <div id='form-choise-id' style={{ display: "flex", justifyContent: "space-between"  }}>
        
        <div  className='CountrySelect-class' ><CountrySelect  Country={Country} setCountry={setCountry}/></div>
          <div  className='CountrySelect-class'><ProfectionSelect  setProffesion={setProffesion} /></div>
          <div  className='CountrySelect-class'><NameSelect ClientName={ClientName} setClientName={setClientName}  /></div>
        </div>
       
      </div>

     {/* <div style={{marginLeft:"5%", marginTop:"2%"}}> <AddSerTeamForm setedit={setedit}/></div>
      <div className='ListDiv'>
        {
          dataz && data.map((item)=>(
            <UserCard dataz={item} key={item?._id}/>
          ))
        }
        </div> */}
   
    
       {data?.length && data?.map((item)=>(
        <ListofServiceCard user={item} key={item?._id}/>

       ))
       }
   
     
    </div>
  );
}

export default AdminLayoutHoc(ListofService);
