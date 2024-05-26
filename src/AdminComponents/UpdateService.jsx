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
import { UpdateServiceListBackend } from '../Redux/api';
import { useEffect } from 'react';


const UpdateService=()=>{
  const [open, setOpen] = useState(false);
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Location, setLocation] = useState('');
  const [ProblemFixed, setProblemFixed] = useState('');
  const [ServiceRating, setServiceRating] = useState('');
  const [ClientName, setClientName] = useState('');
  const [Data, setDatas] = useState('');
  useEffect(()=>{
    const fetechUpdateService=async()=>{
      const UserId=localStorage.getItem("UserId")
      if(UserId){
        const {data}= await UpdateServiceListBackend(UserId)
        setDatas(data)
        console.log(data)
      }
    }
    fetechUpdateService()
  },[])

  const UpdateServiceOnClick = async(e)=>{
    try {
      e.preventDefault();
      const userData={
        Date,
        Time,
        Location,
        ProblemFixed,
        ServiceRating,
        ClientName
      }
    
       const {data,msg}= await UpdateServiceListBackend(userData)
       toast.success("Service Successfully Successfull",{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
      // alert("Service Successfully Successfull")
      console.log(data)
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
        Update
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
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>Update Service History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} value={Date} type="text" placeholder="Enter Date" />
      </Form.Group>
      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Time</Form.Label>
        <Form.Control onChange={(e)=>setTime(e.target.value)} value={Time} type="text" placeholder="Enter Time" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Client Name</Form.Label>
        <Form.Control onChange={(e)=>setClientName(e.target.value)} value={ClientName} type="text" placeholder="Enter Client Name" />
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
        <Form.Control onChange={(e)=>setServiceRating(e.target.value)} value={ServiceRating} type="text" placeholder="Enter Location" />
      </Form.Group>
    
      
      <Button onClick={UpdateServiceOnClick} variant="primary" type="submit" outline color="dark" style={{height: '37px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"15px", fontWeight:"bolder"}}>
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

export default (UpdateService)