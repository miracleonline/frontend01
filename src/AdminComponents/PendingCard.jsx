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
import { UpdatePendingServicecs } from '../Redux/api';
import { useSelector } from 'react-redux';
import { Col, FormGroup, Input, Label } from 'reactstrap';


const PendingCard=({id,setedit})=>{
  const [open, setOpen] = React.useState(false);
  const [ServiceID,setServiceID]= React.useState("")
  const [ClientName,setClientName]= React.useState("")
  const [Location,setLocation]= React.useState("")
  const [Contact,setContact]= React.useState("")
  const [Problem,setProblem]= React.useState("")
  const [Date,setDate]= React.useState("")
  const [Time,setTime]= React.useState("")
  const [Message,setMessage]= React.useState("")
  const [Status,setStatus]=React.useState("")
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    const payload={
      ServiceID,
      ClientName,
      Location,
      Contact,
      Problem,
      Date,
      Time,
      Message,Status
    }

    const UpdatePending=await UpdatePendingServicecs(payload,id);
    console.log("updatePending",UpdatePending);
    setedit((prev)=>!prev);
    handleClose();
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
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>Update Pending Service History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Service ID</Form.Label>
        <Form.Control onChange={(e)=>setServiceID(e.target.value)} value={ServiceID} type="text" placeholder="Enter Service ID" />
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
        <Form.Label>Contact Details</Form.Label>
        <Form.Control onChange={(e)=>setContact(e.target.value)} value={Contact} type="text" placeholder="Enter Contact Details" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Problem</Form.Label>
        <Form.Control onChange={(e)=>setProblem(e.target.value)} value={Problem} type="text" placeholder="Enter Your Problem" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} value={Date} type="date" placeholder="Enter Date" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Time</Form.Label>
        <Form.Control onChange={(e)=>setTime(e.target.value)} value={Time} type="time" placeholder="Enter Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control onChange={(e)=>setMessage(e.target.value)} value={Message} type="text" placeholder="Enter Your Message" />
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
      
        <Form.Label>Pending Update</Form.Label>
        <Form.Control onChange={(e)=>setStatus(e.target.value)} value={Status} type="text" placeholder="Update status" />
      </Form.Group> */}
    
      
      <Button onClick={handleSubmit} variant="primary" type="submit" outline color="dark" style={{height: '37px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"15px", fontWeight:"bolder"}}>
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
    </React.Fragment>
  );
}

export default (PendingCard)