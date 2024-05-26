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
import SignaturePad from './SignaturePad';
import axios from "axios";
import { getServiceList, getUsersFeedbacks } from "../Redux/api";
// import { Button, Col, FormGroup, FormText, Input, Label } from 'reactstrap';

const FeedbackForm = () => {
  const [ Whatyoudid, setWhatyoudid]=useState("")
  const [Time, setTime]=useState("")
  const [Date, setDate]=useState("")
  const [TotalHour, setTotalHour]=useState("")
  const [status, setStatus] = useState("completed");
  const [CustomerSignature, setCustomerSignature]=useState("")
  const [Pending, setPending]=useState("")
  const [Complete, setComplete]=useState("")
  const [Hold, setHold]=useState("")
  const [Statuss, setStatuss]=useState("");
  const [ServiceId, setServiceId] = useState("");
  const [data, setData] = useState([]);
  const [UsersFeedbacks,setUserFeedback]=useState([]);
  const [UserId,setuserId]=useState("");
  const [update,setupdate]=useState(false)
  useEffect(() => {
    const id=localStorage.getItem("UserId");
    setuserId(id)
    if(id){
      fetchUsersFedback(id);
    }
      getUserServices();
    

  }, [update]);
  const getUserServices = async () => {
    const { data, success, msg } = await getServiceList();
    setData(data);
    
  };
  const fetchUsersFedback=async(id)=>{
    const {data}=await getUsersFeedbacks(id);
    setUserFeedback(data);
  }


  const baseurl="http://localhost:5000"
  const feedbackfetch=async(e)=>{
     try {
      e.preventDefault();
      const feedbackData={
        ServiceId,
        UserId,
        Whatyoudid,
        Time, 
        Date,
        CustomerSignature,
        TotalHours:TotalHour,
        Statuss,
        status
      }
      if(!ServiceId){
         toast.error("Please select service id",{
          position:"top-center",
          autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
          hideProgressBar: false, // Show the progress bar
          className: "custom-toast", // Custom class for styling
        })
        return
      }
      const config={
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your_token_here'
        }
      };
      const data = axios.post(`${baseurl}/feedback/post` ,feedbackData,config)
      toast.success("Feedback Posted",{
        position:"top-center",
        autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        hideProgressBar: false, // Show the progress bar
        className: "custom-toast", // Custom class for styling
      })
      // alert("Feedback Posted")
      console.log(data)
      setupdate((prev)=>!prev);
    } catch (error) {
      console.log(error)
     }
  } 

  return (
    
    <div  className="Feedback-Container">
    
      <div id="feedback-res" className="feedback-FormContainer" >
        <h5 style={{color:"red"}}>Please provide your feedback:</h5>
        <Form>
        <div>
          {data && (
            <select
              name=""
              id="select-tag"
              onChange={(e) => setServiceId(e.target.value)}
            >
              <option className="option-tag" value="">
                  Select Service Id's
                </option>
              {data?.map((item) => (
                <option className="option-tag" value={item?._id}>
                  {item?._id}
                </option>
              ))}
            </select>
          )}
        </div>
         
       
        
       
        
          <FormGroup row style={{marginTop:"2%"}}>
            <Label for="exampleText" sm={2}>
            What you did
            </Label>
            <Col sm={10}>
                
              <Input onChange={(e)=>setWhatyoudid(e.target.value)} value={Whatyoudid} id="exampleText" name="text" type="textarea" placeholder="Maximum 100 Words" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              Time
            </Label>
            <Col sm={10}>
              <Input  onChange={(e) => setTime(e.target.value)} value={Time}  id="exampleFile" name="time" type="time" />
              
            </Col>
          </FormGroup>
        
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
            Total Hours
            </Label>
            <Col sm={10}>
            
            <Input onChange={(e) => setTotalHour(e.target.value)} value={TotalHour} id="exampleFile" name="text" type="text" /> 
            </Col>
          </FormGroup>
        
         
  <FormGroup row tag="fieldset">
  <legend className="col-form-label col-sm-2">Status</legend>
  <Col sm={10}>
    <FormGroup check>
      <Input 
        onChange={() => setStatuss("completed")} 
        checked={Statuss === "completed"} 
        value="completed" 
        name="status" 
        type="radio" 
      />
      <Label check>
        Completed
      </Label>
    </FormGroup>
    <FormGroup check>
    </FormGroup>
    <FormGroup check>
      <Input 
        onChange={() => setStatuss("cancel")} 
        checked={Statuss === "cancel"} 
        value="cancel" 
        name="status" 
        type="radio" 
      />
      <Label check>
        Cancel
      </Label>
    </FormGroup>
  </Col>
</FormGroup>

        <FormGroup row>
            <Label for="exampleFile" sm={2}>
            Customer Signature
            </Label>
            <Col sm={10}>
          
            < SignaturePad/>
              
            </Col>
          </FormGroup>
         
          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button onClick={feedbackfetch} className="feedback-Button">Submit</Button>
            </Col>
          </FormGroup>
        </Form>


      </div>


      {UsersFeedbacks && UsersFeedbacks.map((item)=>(
        <div id="feedbackDetail-FormContainer-id" className="feedbackDetail-FormContainer alldetail">
        <div className="feedback-border-shadow" style={{ width: "100%"}}>
             <Form className="feedback-FormContainer-border" style={{ width: "80%" }}>
            <h4>Service ID: <span style={{color:"red"}}>{item?._id}</span></h4>
        
          <FormGroup row>
          </FormGroup>
        
       
        
          <FormGroup row>
            <Label   for="exampleText" sm={2}>
            What you did
            </Label>
            <Col sm={10}>
                
            <p style={{backgroundColor:"white"}}>{item?.Whatyoudid}</p>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              Time
            </Label>
            <Col sm={10}>
            <p style={{backgroundColor:"white"}}>{item?.Time}</p>
              
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              Date
            </Label>
            <Col sm={10}>
            <p style={{backgroundColor:"white"}}>{item?.Date}</p>
              
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
            Total Hours
            </Label>
            <Col sm={10}>
            
      
           
            </Col>
          </FormGroup>
          
          
        </Form></div>
      
      </div> 
      ))}


 
     



      <ToastContainer /> 
    </div>
    
  );
};

export default LayoutHoc(FeedbackForm);
