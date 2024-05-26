import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import UpdateService from './UpdateService';
import PendingCard from './PendingCard';



const UpdatepenCard=({datas,setedit})=> {
  

  return (
    <div>
      <MDBCard shadow='0'  background='white' className='user-card'>
        <MDBCardHeader className='user-card-Name'>Client Name :{datas?.UserId?.firstName}</MDBCardHeader> 
        <MDBCardBody className='text-dark'>
        <p className='user-card-p-Tag'>Service ID : <span>{datas?.ServiceID}</span> </p>
        <p className='user-card-p-Tag'>Location : <span>{datas?.Location}</span> </p>
        <p className='user-card-p-Tag'>Contact Details : <span>{datas?.ContactDetail}</span></p>
        <p className='user-card-p-Tag'>Date:  <span>{datas?.Location}</span></p>
        <p className='user-card-p-Tag'>Time:  <span>{datas?.Time}</span></p>
        <p className='user-card-p-Tag'>Message:  <span>{datas?.Message}</span> </p>
        <p className='user-card-p-Tag'>Status:  <span>{datas?.Status}</span></p>
        </MDBCardBody>
       <PendingCard setedit={setedit} id={datas?._id}/>
      </MDBCard>
    </div>
  );
}
export default UpdatepenCard;

