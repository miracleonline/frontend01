import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from 'react-bootstrap/Form';
import LayoutHoc from './LayoutHoc';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ToastContainer, toast } from 'react-toastify';
import { setLoginUser } from '../Redux/AuthSlice/AuthSlice';
import { EditMyAccountBackend, GetSingleUser } from '../Redux/api';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const EditMyAccount=({edit,setEdit})=>{
  const [open, setOpen] = useState(false);
  const [email,setEmail]=useState("")
  const [Picture, setPicture] = useState('');
  const [GovtID, setGovtID] = useState('');
  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [Contact,setContact]=useState("")
  const [Address,setAddress]=useState("")
  const [Profession, setProfession] = useState('');  


  const navigate=useNavigate();



  const handleClickOpen = () => {
    setOpen(true);
  };
  const EditMyAccountOnclick= async(e)=>{
  
    try {
      e.preventDefault()
     const userData={
      email,uploadpic:Picture,firstName:FirstName, lastName:LastName, professionType:Profession,govtId:GovtID,contact:Contact, address:Address ,
     }
     if(!email){
      toast.error("Please Fill your Registered Email ID",{
       position:"top-center",
       autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
       hideProgressBar: false, // Show the progress bar
       className: "custom-toast", // Custom class for styling
     })
     return
   }

     const formData = new FormData();

     // Iterate over the userData object and append each field to the FormData object
     Object.keys(userData).forEach(key => {
       formData.append(key);
     });

    
      const {data,msg} =await EditMyAccountBackend(formData);
      

      toast.success(msg,{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
      console.log(data);
      localStorage.setItem("UserId",data._id);
      setEdit((prev)=>!prev);
      navigate('/myaccount')
      handleClose()
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px"}}>
        EDIT PROFILE
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
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>EDIT PROFILE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder="Enter Your Email" />
        
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Your Picture</Form.Label>
        <Form.Control onChange={(e)=>{setPicture(e.target.value)}} value={Picture} type="file" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Govt. Issued ID</Form.Label>
        <Form.Control onChange={(e)=>{setGovtID(e.target.value)}} value={GovtID} type="file" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={(e)=>{setFirstName(e.target.value)}} value={FirstName} type="text" placeholder="Enter Your First Name" />
      </Form.Group>
      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={(e)=>{setLastName(e.target.value)}} value={LastName} type="text" placeholder="Enter Your Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact</Form.Label>
        <Form.Control onChange={(e)=>{setContact(e.target.value)}} value={Contact} type="text" placeholder="Enter Your Contact" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={(e)=>{setAddress(e.target.value)}} value={Address} type="text" placeholder="Enter Your Address" />
      </Form.Group>


      <div className='InputContainer-div'>
        <p><span style={{color:"red", fontSize:"20px"}}>*</span>Profession Type</p>
        <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Electrician" control={<Radio />} label="Electrician" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Plumber" control={<Radio />} label="Plumber" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Carpenter" control={<Radio />} label="Carpenter" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="ComputerEngineer" control={<Radio />} label="Computer Engineer" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Cleaner" control={<Radio />} label="Cleaner" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="Gardener" control={<Radio />} label="Gardener" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="FacilityManager" control={<Radio />} label="Facility Manager" />
        <FormControlLabel onChange={(e)=>setProfession(e.target.value)} value="other" control={<Radio />}label="other"/>
      </RadioGroup>
      </FormControl>
       </div>
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Profession</Form.Label>
        <Form.Control onChange={(e)=>{setProfession(e.target.value)}} value={Profession} type="text" placeholder="Enter Your Profession" />
      </Form.Group> */}

      <Button onClick={EditMyAccountOnclick} variant="primary" type="submit" outline color="dark" style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px"}}>
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


export default EditMyAccount
