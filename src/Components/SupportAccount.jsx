import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/FeedbackForm.css";
import { ToastContainer, toast } from 'react-toastify';
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap"; // Importing necessary components from Reactstrap
import LayoutHoc from "./LayoutHoc";
import SignatureInput from "./Signature";
import SupportAccShow from "./SupportAccShow";
import { LocalLaundryService } from "@mui/icons-material";
import { GetIndSupportQuery, GetSupportQuery, PostSupportQuery } from "../Redux/api";
// import { Button, Col, FormGroup, FormText, Input, Label } from 'reactstrap';

const SupportAccount = () => {
  // Subject,Type,Description,UserId
  const [Subject,setSubject]=useState("");
  const [Type,setType]=useState("");
  const [Description,setDescription]=useState("");
  const [Attachfile,setAttachfile]=useState("");
  const [data, setData] = useState([]);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const UserId=localStorage.getItem("UserId");
    const payload={
      UserId,
      Subject,Type,Description,Attachfile
    }
    const formData = new FormData();

    // Iterate over the userData object and append each field to the FormData object
  


    const {data,msg}=await PostSupportQuery(formData);

   


    
    toast.success(msg,{
      position:"top-center",
      autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
      hideProgressBar: false, // Show the progress bar
      className: "custom-toast", // Custom class for styling
    })     

  }


  const fetchSupport = async () => {
    try {
    const UserId=localStorage.getItem("UserId");

      // Assuming GetSupportQuery returns data in the format { data: [...] }
      const {data} = await GetIndSupportQuery(UserId);
      // const supportData = response.data;
      setData(data);
      console.log("Support data:", data);
    } catch (error) {
      console.error("Error fetching support data:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  // const fetchSupport= async()=>{
  //   const {data}= await GetSupportQuery()
  //   setData(data)
  //   console.log("datatatat",data)
  
  // }
 useEffect(()=>{
  fetchSupport()
 },[])

  return (
    
    <div id="supp-res" className="Feedback-Container">
     <div style={{width:"60%"}}><p className="if-you-have" style={{color:"red"}}>If you have any questions raise Ticket</p>
       <p style={{fontWeight:"550"}}>Service Team Helpline: xxxx-xxxx-xx</p></div>
      <div className="feedback-FormContainer">

        <Form  style={{ width:"90%"}}>

         
          <FormGroup row>
          </FormGroup>
        
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
            <span style={{color:"red", fontSize:"20px"}}>*</span>
              Subject
            </Label>
            <Col sm={10}>
              <Input id="exampleFile" name="text" type="text" onChange={(e)=>setSubject(e.target.value)} />
              
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={2}>
            <span style={{color:"red", fontSize:"20px"}}>*</span>
              Type
            </Label>
            <Col sm={10}>
              {/* <Input id="exampleFile" name="date" type="date" /> */}
              <select name="" id="" style={{padding:"9px 45px"}} onChange={(e)=>setType(e.target.value)}>
                <option value="">Select your Type</option>
                <option value="Account">Account</option>
                <option value="Payouts">Payouts</option>
                <option value="Complaint">Complaint</option>
                <option value="Question">Question</option>
                <option value="Service Task">Service Task</option>
                <option value="Other">Other</option>
              </select>
              
            </Col>
          </FormGroup>
        
          <FormGroup row>
            <Label for="exampleText" sm={2}>
            <span style={{color:"red", fontSize:"20px"}}>*</span>
            Description
            </Label>
            <Col sm={10}>
                
              <Input id="exampleText" name="text" type="textarea" placeholder="Write here..." onChange={(e)=>setDescription(e.target.value)} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleFile" sm={2}>
            <span style={{color:"red", fontSize:"20px"}}>*</span>
              Attach File
            </Label>
            <Col sm={10}>
              <Input id="exampleFile" onChange={(e)=>setAttachfile(e.target.files[0])}  name="text" type="file"  />
              
            </Col>
          </FormGroup>

         
          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button className="feedback-Button" onClick={(e)=>handleSubmit(e)}>Submit</Button>
            </Col>
          </FormGroup>

          
        </Form>

       
      </div>
   



      <div className="feedbackDetail-FormContainer alldetail">
      <div>
        {data && data?.map((item)=>(
<SupportAccShow item={item} />
        ))}
          </div>
       
      </div>
      <ToastContainer />
    </div>
  );
};

export default (SupportAccount);
