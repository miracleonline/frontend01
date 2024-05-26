import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/FeedbackDetail.css";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap"; // Importing necessary components from Reactstrap
import LayoutHoc from "../Components/LayoutHoc";

import CountrySelect from "./CountrySelect";
import ProfectionSelect from "./ProfectionSelect";
import NameSelect from "./NameSelect";
import AdminLayoutHoc from "./AdminLayoutHoc";
import axios from "axios";
import { getAllFeedbackUsers } from "../Redux/api";
// import { Button, Col, FormGroup, FormText, Input, Label } from 'reactstrap';

const FeedbackDetail = () => {
  const [datas ,setDatas]=useState([]);
  const [edit,setedit]=useState(false);
  const [ClientName,setClientName]=React.useState("");
  const [Country,setCountry]=React.useState("");
  const [Proffesion,setProffesion]=React.useState("");




  useEffect(()=>{
    getPendingService();
   },[edit,ClientName,Country])
   useEffect(()=>{

   },[datas])

 
   const getPendingService=async()=>{
    
      let name;
      if(ClientName){
        name=ClientName;
      }
      let country;
      if(Country){
        country=Country
      }
      let proffesion;
      if(Proffesion){
        proffesion=Proffesion
      }

      const {data}=await getAllFeedbackUsers(name,country,proffesion);
      setDatas(data)
      console.log(data)
  
  
  }
  return (
    
    
<div className="Feedback-Container" style={{backgroundColor:"white"}}>


 <div id="feedback-detail-form-choise"  className="form-choise" style={{ width:"85%"}}>
        <div id='form-choise-id' style={{ display: "flex", justifyContent: "space-between" }}>
        
        <div  className='CountrySelect-class' ><CountrySelect  Country={Country} setCountry={setCountry}/></div>
          <div  className='CountrySelect-class'><ProfectionSelect  setProffesion={setProffesion} /></div>
          <div  className='CountrySelect-class'><NameSelect Proffesion={Proffesion} ClientName={ClientName} setClientName={setClientName}  /></div>

        </div>
       
      </div>

    
      <div id="feedbackDetail-FormContainer-id" className="feedbackDetail-FormContainer alldetail">
       {
        datas && datas.map((item)=>(
          <div    className="feedback-border-shadow" style={{ width: "100%", marginTop:"2%"}}>
             <Form id="feedback-FormContainer-border-id" className="feedback-FormContainer-border" style={{ width: "80%" }}>
            <h4>Service ID: <span style={{color:"red"}}>{item?.ServiceId._id}</span></h4>
        
          <FormGroup row>
          </FormGroup>
        
       
        
          <FormGroup row  >
            <Label style={{fontWeight:"500", color:"black"}}  for="exampleText"  sm={3}>
            What you did : 
            </Label>
            <Col sm={9}>
            <p style={{backgroundColor:"white" , marginTop:"2%"}}>{item?.Whatyoudid}</p>
              
            </Col>
                
           
            
          </FormGroup>
          <FormGroup row >
            <Label style={{fontWeight:"500", color:"black"}}  for="exampleFile" sm={3}>
              Time:
            </Label>
            <Col sm={9}>
            <p style={{backgroundColor:"white" , marginTop:"2%"}}>{item?.Time}</p>
              
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" style={{fontWeight:"500", color:"black"}}  sm={3}>
              Date:
            </Label>
            <Col sm={9}>
            <p style={{backgroundColor:"white", marginTop:"2%"}}>{item?.Date}</p>
              
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{fontWeight:"500", color:"black"}}  for="exampleFile" sm={3}>
            Total Hours:
            </Label>
            <Col sm={9}>
            
            <p style={{backgroundColor:"white", marginTop:"2%"}}>{item?.TotalHours}</p>
           
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label style={{fontWeight:"500", color:"black", }}  for="exampleFile" sm={3}>
            Status
            </Label>
            <Col sm={9}>
            
            <p style={{backgroundColor:"white", marginTop:"2%"}}>{item?.Status}</p>
           
            </Col>
          </FormGroup>
        </Form>
        </div>
         
        ))
        }
        
       
      </div>
    </div>
  );
};

export default AdminLayoutHoc(FeedbackDetail);
