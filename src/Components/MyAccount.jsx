import React, { useEffect, useState } from "react";
import FormDialog from "./FormDialog";
import "../CSS/MyAccount.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import LayoutHoc from "./LayoutHoc";
import EditMyAccount from "./EditMyAccount";
import { GetSingleUser } from "../Redux/api";

const MyAccount = () => {
  const [edit, setEdit] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const UserId = localStorage.getItem("UserId");
      
      if (UserId) {
        const { data } = await GetSingleUser(UserId);
        setDatas(data);
        console.log(data);
      }
    };
    getUser();
  }, [edit]);

  return (
    <div className="myaccount-body">
      <MDBCard
        style={{ border: "5px solid #00afb5", width: "55%", marginLeft: "35%" }}
        className="boxshadow"
      >
        <div
          className="rounded-top text-white d-flex flex-row"
          style={{ backgroundColor: "#000", height: "200px" }}
        >
          <div
            className="ms-4 mt-5 d-flex flex-column"
            style={{ width: "150px" }}
          >
            <MDBCardImage
              src={data.uploadpic}
              alt="Generic placeholder image"
              className="mt-4 mb-2 img-thumbnail"
              fluid
              style={{ width: "150px", zIndex: "1" }}
            />

            <EditMyAccount edit={edit} setEdit={setEdit} />
            {/* <MDBBtn
              outline
              color="dark"
              style={{
                height: "36px",
                overflow: "visible",
                backgroundColor: "#00afb5",
                color: "white",
                fontSize: "13px",
              }}
            >
            
            </MDBBtn> */}
          </div>
          <div className="ms-3" style={{ marginTop: "130px" }}>
            <MDBTypography tag="h5">{datas?.firstName}</MDBTypography>
            <MDBCardText>{datas?.professionType}</MDBCardText>
          </div>
        </div>
        <div
          className="p-4 text-black"
          style={{ backgroundColor: "#f8f9fa" }}
        ></div>
        <MDBCardBody className="text-black p-4">
          <div className="mb-5" style={{ marginTop: "2%" }}>
            <p className="lead fw-normal mb-1">About</p>
            <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
              <MDBCardText className="font-italic mb-1">
                <span className="profile-text-lebal1">Email ID: </span>{" "}
                <span className="profile-text">{datas?.email}</span>
              </MDBCardText>
              <MDBCardText className="font-italic mb-1">
                <span className="profile-text-lebal2"> First Name:</span>{" "}
                <span className="profile-text">{datas?.firstName}</span>
              </MDBCardText>
              <MDBCardText className="font-italic mb-0">
                <span className="profile-text-lebal3">Last Name :</span>
                <span className="profile-text">{datas?.lastName}</span>
              </MDBCardText>
              <MDBCardText className="font-italic mb-1">
                <span className="profile-text-lebal4">Contact:</span>{" "}
                <span className="profile-text">{datas?.contact}</span>
              </MDBCardText>
              <MDBCardText className="font-italic mb-1">
                <span className="profile-text-lebal5"> Address:</span>
                <span className="profile-text">
                 ,{datas?.landmark}
                 
                </span>
              </MDBCardText>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-4">
            <MDBCardText className="lead fw-normal mb-0">Govt. ID</MDBCardText>
            <MDBCardText className="mb-0">
              <a href="#!" className="text-muted"></a>
            </MDBCardText>
          </div>
          <MDBRow>
            <MDBCol className="mb-2">
              <MDBCardImage
                src={datas?.govtId}
                alt="image 1"
                className="w-50 rounded-3"
              />
            </MDBCol>
            {/* <MDBCol className="mb-2">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                alt="image 1"
                className="w-100 rounded-3"
              />
            </MDBCol> */}
          </MDBRow>

          <FormDialog edit={edit} setEdit={setEdit} />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default LayoutHoc(MyAccount);
