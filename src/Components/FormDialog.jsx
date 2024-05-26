import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from 'react-bootstrap/Form';
import LayoutHoc from './LayoutHoc';
import { useState } from 'react';
import { UpdatePassword } from '../Redux/api';
import { ToastContainer, toast } from 'react-toastify';


const FormDialog=()=>{
  const [open, setOpen] = useState(false);
  const [NewPassword, setNewPassword]= useState();
  const [ConfPassword, setConfPassword]= useState();
  const [email, setemail]= useState();
  const handleSubmit = async(event) => {
    event.preventDefault();
    const payload={
      email, password:NewPassword,confirmPassword:ConfPasswordss
    }
    const res=await UpdatePassword(payload);
    if(res.success){
      toast.success(res.msg,{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
    }else{
      toast.error(res.response.data.msg,{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
    }
    handleClose()
   
  }
    // eslint-disable-next-line no-console  



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px"}}>
        CHANGE PASSWORD
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
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Email</Form.Label>
        <Form.Control onChange={(e)=>{setemail(e.target.value)}} value={email} type="text" placeholder="Enter Your Email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control onChange={(e)=>{setNewPassword(e.target.value)}} value={NewPassword} type="password" placeholder="Password" />
      </Form.Group>
      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onChange={(e)=>{setConfPassword(e.target.value)}} value={ConfPassword} type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Button onClick={handleSubmit}  variant="primary" type="submit" outline color="dark" style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px"}}>
      Update
      </Button>
    </Form>
            </div>

          </DialogContentText>
         
        </DialogContent>
       
      </Dialog>
      <ToastContainer />
    </React.Fragment>
  );
}

export default FormDialog