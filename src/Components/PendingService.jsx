import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../CSS/PendingService.css"
import { red } from '@mui/material/colors';
import LayoutHoc from './LayoutHoc';
import { getUsersPendingReq } from '../Redux/api';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateData =(name, Location , ContactDetails , Problem , Date,Time ,Message) =>{
  return { name, Location , ContactDetails , Problem , Date,Time ,Message  };
}

const rows = [
  CreateData('Ak Singh', "Noida", "9646948925","To fix the lights of room","20/03/2024","01:30pm","Call before coming"  ),
//  CreateData('Client Name', "Mr Chandra Prakash"),
//   CreateData('Location', "Sector 15/Faridabad"),
//   CreateData('Problem Fixed', "Repaired lamp and fixed wire of kitchen board"),
//   CreateData('Service Rating to me', "⭐⭐⭐⭐"),
];

const PendingService=()=>{

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const id=localStorage.getItem("UserId");
    getParticularService(id);
  }, []);
  const getParticularService = async (id) => {
    const { data, success, msg } = await getUsersPendingReq(id);
    setData(data);
  };
 
 

  return (
    <div className="pending-main-body" style={{width:"60%"}}> 
      <div className='pending-flex'><div><h1>Pending Service</h1></div>
      {/* <div>
        <select name=""  id="pending-select-tag">
        <option className="option-tag" value="">Lorem</option>
        <option className="option-tag" value="">Lorem</option>
        <option className="option-tag" value="">Lorem</option>
        </select>
        </div> */}
      </div>
     <TableContainer  className='my-pending-service-body'  component={Paper}>
       {/* <h2 style={{color:"red"}}>Service ID: <span>xxxxxxxx</span></h2> */}
  
      <Table  className='my-service-box ' aria-label="simple table">
      <TableHead >
          <TableRow >
            {/* <button style={{padding: "8px 8px" , borderRadius:"50%",border:"0px", backgroundColor:"red"}}></button> */}
            <TableCell   className='table-call-colour' style={{color:"red", fontWeight:"bolder",border: "1px solid #00afb5"}}>Status</TableCell>
            <TableCell   className='table-call-colour' style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}}>Client Name</TableCell>
            <TableCell id="table-width" style={{color:"black", fontWeight:"bolder", border: "1px solid #00afb5"}} >Location</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >Contact Details</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >Problem</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >Service ID</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder", border: "1px solid #00afb5"}} >Date</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >Time</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder" ,border: "1px solid #00afb5"}}  >Message</TableCell>
          </TableRow>
        </TableHead>
     
        <TableBody className='TableRow' id="my-service-box" >
        
          {data?.map(() => (
            <TableRow
              
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

<TableCell style={{color:"red", fontWeight:"bolder", border: "1px solid #00afb5"}} component="th" scope="row">
                {row?.Status}
              </TableCell>
              <TableCell style={{ border: "1px solid #00afb5"}} component="th" scope="row">
                {row?.firstName}
              </TableCell>
           
              {/* <TableCell align="right">{row.name}</TableCell> */}
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row?.Location}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row?.ContactDetail}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.ServiceID}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.Date}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.Time}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.Message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
    </div>
   
  );
}

export default LayoutHoc(PendingService); 