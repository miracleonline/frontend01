import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../CSS/MyService.css";
import Rating from "@mui/material/Rating";
import LayoutHoc from "./LayoutHoc";
import {
  getIndividServiceList,
  getServiceList,
  getUsersServiceList,
} from "../Redux/api";
const CreateData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};


const MyService = () => {
  const [data, setData] = useState([]);
  const [servdata, setservData] = useState([]);

  const [serviceId, setServiceId] = useState("");

  useEffect(() => {
    if(id){
      getUserServices(id);
    }

  }, []);
  useEffect(() => {
    getParticularServices();
  }, [serviceId]);
  const getUserServices = async (id) => {
    const { data, success, msg } = await getUsersServiceList(id);
    setData(data);
    setservData(data);
  };
  const getParticularServices=async()=>{
    if(serviceId){
      const { data, success, msg } = await getIndividServiceList(serviceId);
      setservData(data);
    }
   
  }
  return (
    <div className="service-main-div">
      <div className="myservice-flex">
        <div>
          <h1 className="SelectServiceID">Select Service ID</h1>
        </div>
        <div>
          {data && (
            <select
              name=""
              id="select-tag"
              onChange={(e) => setServiceId(e.target.value)}
            >
              {data?.map((item) => (
                <option className="option-tag" value={item?._id}>
                  {item?._id}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      {servdata &&
        servdata?.map((item) => (
          <TableContainer
            style={{ width: "55%" }}
            className="my-service-body"
            component={Paper}
          >
            <h2 style={{ color: "red" }}>
              Service ID: <span>{item?._id}</span>
            </h2>

            <Table
              id="my-service-box-id"
              className="my-service-box "
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bolder" }}>
                    Date
                  </TableCell>
                  <TableCell align="right">{item?.Date}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bolder" }}>
                    Time
                  </TableCell>
                  <TableCell align="right">{item?.Time}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bolder" }}>
                    Client Name
                  </TableCell>
                  <TableCell align="right">{item?.UserId?.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bolder" }}>
                  Problem Fixed
                  </TableCell>
                  <TableCell align="right">{item?.ProblemFixed}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "15px", fontWeight: "bolder" }}>
                    Ratings
                  </TableCell>
                  

 <TableCell align="right">
 <Rating
        className='user-card-p-Tag'
          // className="Item-rating"
            name="half-rating-read"
            defaultValue={item?.ServiceRating}
            precision={0.5}
            readOnly
          />

 </TableCell>

                  {/* <TableCell align="right">{item?.ServiceRating}</TableCell> */}
                </TableRow>
               
              </TableBody>
            </Table>
          </TableContainer>
        ))}
    </div>
  );
};

export default (MyService);
