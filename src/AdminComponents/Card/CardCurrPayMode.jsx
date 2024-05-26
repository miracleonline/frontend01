import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import "../CSS/UpdateMyEarning.css"
import { red } from '@mui/material/colors';
import CardUpdateMyEarning from './CardUpdateMyEarning';
// import CardUpdateMyEarning from './Card/CardUpdateMyEarning';


const CreateData =(Profession,name ,payoutMode ) =>{
  return {Profession,name ,payoutMode  };
}

const rows = [
  CreateData('Computer Engineer',"Abhishek","PayPal"  ),
 

];

const CardCurrPayMode=()=>{
  return (
    <div  style={{ width:"1020px", margin:"auto"}}> 
    
     <TableContainer  className='my-pending-service-body'  component={Paper}>
       {/* <h2 style={{color:"red"}}>Service ID: <span>xxxxxxxx</span></h2> */}
      
      <Table className='my-service-box ' aria-label="simple table">
      <TableHead>
          <TableRow>
          
            <TableCell  className='table-call-colour' style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}}>Profession</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder", border: "1px solid #00afb5"}} >Nane</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >Payout Mode</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} component="th" scope="row">
                {row.Profession}
              </TableCell>
           
              {/* <TableCell align="right">{row.name}</TableCell> */}
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.name}</TableCell>
              <TableCell style={{color:"red", border: "1px solid #00afb5"}} >{row.payoutMode}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
     </TableContainer>
   
    </div>
   
  );
}


export default (CardCurrPayMode); 