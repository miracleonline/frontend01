import React, { useEffect, useState } from 'react';
import LayoutHoc from '../Components/LayoutHoc';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import UpdateService from './UpdateService';
import Rating from "@mui/material/Rating";

const UserCard=({data})=>{
 
  return (
    <div>
      <MDBCard shadow='0'  background='white' className='user-card'>
        <MDBCardHeader className='user-card-Name'>Client Name : {data?.UserId?.firstName}</MDBCardHeader> 
        <MDBCardBody className='text-dark'>
        <p className='user-card-p-Tag'>Date : <span>{data?.Date}</span> </p>
        <p className='user-card-p-Tag'>Time : <span>{data?.Time}</span></p>
        <p className='user-card-p-Tag'>Location :<span>{data?.Location}</span></p>
        <p className='user-card-p-Tag'>Problem Fixed :<span>{data?.ProblemFixed}</span></p>
        <p className='user-card-p-Tag'>Service Rating: <span> <Rating
        className='user-card-p-Tag'
          // className="Item-rating"
            name="half-rating-read"
            defaultValue={data?.ServiceRating}
            precision={0.5}
            readOnly
          /></span></p>
        {/* <p className='user-card-p-Tag'>Service Rating: <span>{data?.ServiceRating}</span></p>  */}
       
        </MDBCardBody>
       {/* <UpdateService/> */}
      </MDBCard>
    </div>
  );
}

export default(UserCard)