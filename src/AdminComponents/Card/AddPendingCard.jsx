import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { UpdateServiceListBackend } from '../../Redux/api';
import { UserList } from '../UserList';
import CountrySelect from '../CountrySelect';
import { Col, FormGroup, Input, Label } from 'reactstrap';




const AddPendingCard=({setedit})=>{
  const [open, setOpen] = useState(false);
  const [ServiceID,setServiceID]= useState("")
  const [ClientName,setClientName]= useState("")
  const [Location,setLocation]= useState("")
  const [Contact,setContact]= useState("")
  const [Problem,setProblem]= useState("")
  const [Date,setDate]= useState("")
  const [Time,setTime]= useState("")
  const [Message,setMessage]= useState("")
  const [Status,setStatus]= useState("");
  const [Country,setCountry]=React.useState("");
  const [Statuss, setStatuss]=useState("");
  


  const dispatch= useDispatch()
  
 
  const AddPendingFetchOnCLick= async(e)=>{
    try {
      e.preventDefault();
      const  AddPendingData={
        Problem,Country,ClientName,ServiceID,Location,ContactDetail:Contact,Date,Time,Message,Status,

      }
     
      const {data,msg}= await UpdateServiceListBackend(AddPendingData)
      
      toast.success("Naw Pending Data Added",{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
      handleClose();
      // alert("Naw Pending Data Added")
      console.log( "data",data)
      setedit((prev)=>!prev);
      
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("it is called")
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px", fontWeight:"bolder"}}>
     Add New Pending Service 
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
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>Add New Pending Service Request</DialogTitle>
        <DialogContent>
          <DialogContentText>   
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Service ID</Form.Label>
        <Form.Control onChange={(e)=>setServiceID(e.target.value)} value={ServiceID} type="text" placeholder="Enter Service ID" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Client Name</Form.Label> <br />
     <UserList ClientName={ClientName} setClientName={setClientName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Country</Form.Label>
     <CountrySelect setCountry={setCountry} />
      </Form.Group>


    
     
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control onChange={(e)=>setLocation(e.target.value)} value={Location} type="text" placeholder="Enter Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Details</Form.Label>
        <Form.Control onChange={(e)=>setContact(e.target.value)} value={Contact} type="text" placeholder="Enter Contact Details" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Problem</Form.Label>
        <Form.Control onChange={(e)=>setProblem(e.target.value)} value={Problem} type="text" placeholder="Enter Your Problem" />
      </Form.Group>



      <FormGroup row tag="fieldset">
  <legend className="col-form-label col-sm-2">Status</legend>
  <Col sm={10}>
    <FormGroup check>
      <Input 
        onChange={() => setStatus("fullfilled")} // Set Status instead of Statuss
        checked={Status === "fullfilled"} // Check Status instead of Statuss
        value="fullfilled" 
        name="status" 
        type="radio" 
      />
      <Label check>
        Completed
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input 
        onChange={() => setStatus("Pending")} // Set Status instead of Statuss
        checked={Status === "Pending"} // Check Status instead of Statuss
        value="Pending" 
        name="status" 
        type="radio" 
      />
      <Label check>
        Pending
      </Label>
    </FormGroup>
  </Col>
</FormGroup>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status...</Form.Label>
        <Form.Control onChange={(e)=>setStatus(e.target.value)} value={Status} type="text" placeholder="Enter Status" />
      </Form.Group> */}




      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} value={Date} type="date" placeholder="Enter Date" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Time</Form.Label>
        <Form.Control onChange={(e)=>setTime(e.target.value)} value={Time} type="Time" placeholder="Enter Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control onChange={(e)=>setMessage(e.target.value)} value={Message} type="textarea" placeholder="Enter Message" />
      </Form.Group>
      
      <Button onClick={AddPendingFetchOnCLick} variant="primary" type="submit" outline color="dark" style={{height: '37px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"15px", fontWeight:"bolder"}}>
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

export default (AddPendingCard)