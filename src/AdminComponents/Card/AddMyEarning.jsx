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
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { UpdateMyEarningBackend, getServiceList } from '../../Redux/api';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect } from 'react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === name._id
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

// 
const AddMyEarning=({setedit})=>{
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [ServiceId, setServiceId] = useState("");
  const [Date, setDate] = useState("");
  const [MyEarning, setMyEarning] = useState("");
  const [userList, setuserList] = useState([]);

  const dispatch= useDispatch()
  
  const handleChange = (event) => {
    const { value } = event.target;
    setServiceId(value);
  };
  useEffect(()=>{
    getAllUserService()
  },[])
const getAllUserService=async()=>{
  const {data}=await getServiceList()
  setuserList(data)
}
  const AddMyEarningOnClick=async(e)=>{
    try {
       e.preventDefault();
       const AddMyEarningdata={
        ServiceId,DateofTask:Date,MyEarning
      }
      const {data,msg}=await UpdateMyEarningBackend(AddMyEarningdata)
      toast.success("Naw Pending Data Added",{
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
  console.log("userlist",userList);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}  style={{height: '36px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"13px", fontWeight:"bolder", marginTop:"1%"}}>
       Add New Earning 
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
        <DialogTitle outline color="dark" style={{height: '50px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"18px"}}>Update My Earning</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          <div  style={{ width:"500px", marginTop:"2%" }} >
            <Form>
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Service Id</Form.Label> <br />
      <Select
        labelId="demo-name-label"
        id="demo-name"
        value={ServiceId}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
         style={{width:"150px"}}
      >
        {userList && userList?.map((name) => (
          <MenuItem
            key={name._id}
            value={name._id}
            style={getStyles(name, ServiceId, theme)}
          >
            {name?._id}
          </MenuItem>
        ))}
      </Select>
      </Form.Group>
      
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date of Task</Form.Label>
        <Form.Control onChange={(e)=>setDate(e.target.value)} value={Date} type="date" placeholder="Enter Date of Task" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>My Earning</Form.Label>
        <Form.Control onChange={(e)=>setMyEarning(e.target.value)} value={MyEarning} type="text" placeholder="Enter Earning" />
      </Form.Group>
      
      <Button onClick={AddMyEarningOnClick} variant="primary" type="submit" outline color="dark" style={{height: '37px', overflow: 'visible', backgroundColor:"#00afb5", color: "white", fontSize:"15px", fontWeight:"bolder"}}>
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

export default (AddMyEarning)