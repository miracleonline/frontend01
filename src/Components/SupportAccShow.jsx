import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/FeedbackForm.css";
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
// import { Button, Col, FormGroup, FormText, Input, Label } from 'reactstrap';


const SupportAccShow = ({item}) => {
  return (
    
    <div className="SupportAccShow-main" >
        <div className="SupportAccShow">
         <div><p> Subject : <span style={{backgroundColor:"white"}}>{item?.Subject}</span> </p> </div>
         <div><p>   Type:  &nbsp; &nbsp;  <span style={{backgroundColor:"white"}}>{item?.Type}</span>  </p> </div>
         <div><p>  Description:  <span style={{backgroundColor:"white"}}>{item?.Description}</span> </p> </div>
         <div><p>  Attach File  </p>
        <div >
            <img className="image-width" src={item?.Attachfile}></img>
        </div>
         </div>
        </div>
    </div>
  );
};

export default (SupportAccShow);
