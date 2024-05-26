import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../CSS/MyEarning.css"
import { red } from '@mui/material/colors';
import LayoutHoc from './LayoutHoc';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsersEarning } from '../Redux/api';

const CreateData =(serviceid,DateOfTask ,MyEarning ) =>{
  return {serviceid,DateOfTask ,MyEarning  };
}

const rows = [
  CreateData('UX235442626',"20/03/2024","CAD300"  ),
  CreateData('UX235442626',"10/03/2024","CAD500"  ),
  CreateData('UX235442626',"06/03/2024","CAD300"  ),
  CreateData('UX235442626',"23/03/2024","CAD100"  ),
//  CreateData('Client Name', "Mr Chandra Prakash"),
//   CreateData('Location', "Sector 15/Faridabad"),
//   CreateData('Problem Fixed', "Repaired lamp and fixed wire of kitchen board"),
//   CreateData('Service Rating to me', "⭐⭐⭐⭐"),
];

const MyEarning=()=>{
  const [data, setData] = useState([]);

  useEffect(() => {
    const id=localStorage.getItem("UserId");
    getParticularService(id);
  }, []);
  const getParticularService = async (id) => {
    const { data, success, msg } = await getUsersEarning(id);
    setData(data);
  };

  return (
    <div className="pending-main-body" style={{width:"60%"}}> 
      <div className='pending-flex'><div><h1>My Earnings Table</h1></div>
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
      
      <Table className='my-service-box ' aria-label="simple table">
      <TableHead>
          <TableRow>
          
            <TableCell  className='table-call-colour' style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}}>Service ID</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder", border: "1px solid #00afb5"}} >Date of Task</TableCell>
            <TableCell style={{color:"black", fontWeight:"bolder",border: "1px solid #00afb5"}} >My Earning</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data && data?.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} component="th" scope="row">
                {row?.ServiceId?.id}
              </TableCell>
           
              {/* <TableCell align="right">{row.name}</TableCell> */}
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.DateofTask}</TableCell>
              <TableCell style={{color:"black", border: "1px solid #00afb5"}} >{row.MyEarning}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
    </div>
   
   
  );
}

export default LayoutHoc(MyEarning); 