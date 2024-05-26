import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from 'react-bootstrap/Form';
import LayoutHoc from '../Components/LayoutHoc';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AddNewListBackend } from '../Redux/api';
import { GetAllUser } from '../Redux/AuthSlice/AuthSlice';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { UserList } from './UserList';
import CountrySelect from './CountrySelect';
import { Padding } from '@mui/icons-material';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const AddSerTeamForm=({setedit})=>{
  const [open, setOpen] = useState(false);
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Location, setLocation] = useState('');
  const [ProblemFixed, setProblemFixed] = useState('');
  const [ServiceRating, setServiceRating] = useState('');
  const [ClientName, setClientName] = useState('');
  const [Country,setCountry]=React.useState("");
  
   const fetchAddServiceTeamOnClick=async(e)=>{
    try {
      e.preventDefault()
     const userData={
      Country,Date,Time,Location,ProblemFixed,ServiceRating,ClientName
     }    
      const {data,msg} = await AddNewListBackend(userData);
      toast.success(msg,{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
      console.log(data);
      setedit((prev)=>!prev);
      handleClose();
    } catch (error) {
      console.log(error)
    }
   }
   

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px", fontWeight:"bolder"}}>
      Add New Service
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>  Add New Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
   
   
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Client Name</Form.Label> <br />
     <UserList  ClientName={ClientName} setClientName={setClientName} style={{ width: '300px', border: "2px solid red" }} />
      </Form.Group>
    


   
   
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Country</Form.Label>
     <CountrySelect setCountry={setCountry} />
      </Form.Group>
   
   
   
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} value={Date} type="date" placeholder="Enter Date" />
      </Form.Group>
      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Time</Form.Label>
        <Form.Control onChange={(e)=>setTime(e.target.value)} value={Time} type="time" placeholder="Enter Time" />
      </Form.Group>
      
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control onChange={(e)=>setLocation(e.target.value)} value={Location} type="text" placeholder="Enter Location" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Problem Fixed</Form.Label>
        <Form.Control onChange={(e)=>setProblemFixed(e.target.value)} value={ProblemFixed} type="text" placeholder="Enter Your Problem" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Service Rating</Form.Label>
        <Form.Control onChange={(e)=>setServiceRating(e.target.value)} value={ServiceRating} type="text" placeholder="Enter Ratings" />
      </Form.Group>
    
      
      <Button onClick={fetchAddServiceTeamOnClick} variant="primary" type="submit" outline color="dark" style={{height: '37px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"15px", fontWeight:"bolder"}}>
      Update
      </Button>
    </Form>
            </div>

          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default (AddSerTeamForm)