import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../CSS/UpdateMyEarning.css"
import { red } from '@mui/material/colors';
import CardUpdateMyEarning from './Card/CardUpdateMyEarning';


const CreateData =(serviceid,DateOfTask ,MyEarning ) =>{
  return {serviceid,DateOfTask ,MyEarning  };
}

const rows = [
  CreateData('UX235442626',"20/03/2024","CAD300"  ),
 

];

const CardUpEarning=({data,setedit})=>{
 
  return (
    <div  style={{ width:"72%", margin:"auto"}}> 
    
     <TableContainer  className='my-pending-service-body'  component={Paper}>
       {/* <h2 style={{color:"red"}}>Service ID: <span>xxxxxxxx</span></h2> */}
      
      <Table className='my-service-box ' aria-label="simple table">
      <TableHead>
          <TableRow>
          
            <TableCell  className='table-call-colour' style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}}>Service ID</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder", border: "1px solid #00afb5"}} >Date of Task</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >My Earning</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} component="th" scope="row">
                {row.ServiceId?._id}
              </TableCell>
           
              {/* <TableCell align="right">{row.name}</TableCell> */}
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row?.DateofTask}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row?.MyEarning}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
     </TableContainer>
  
    </div>
   
  );
}

export default (CardUpEarning); 