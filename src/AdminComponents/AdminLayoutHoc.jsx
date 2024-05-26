"use client";
import React, { useEffect, useState } from "react";

import AdminIndex from "./AdminIndex";


const AdminLayoutHoc = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    const [user, setUser] = useState({});
    // const Baseurl = "https://wicked-gray-betta.cyclic.app/api/v1/";
    // const token = localStorage.getItem("AdminToken");
    // const Auth = {
    //   headers: {
    //     Authorization: `${token}`,
    //   },
    // };

    // useEffect(() => {
    //   getUser();
    // }, []);

    // const getUser = async () => {
    //   try {
    //     const { data } = await axios.get(`${Baseurl}User/profile`, Auth);
    //     setUser(data.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    return (
      <div>
        <section>
          {/* Sidebar */}
          <div>
            <AdminIndex hamb={hamb} setHamb={setHamb} user={user} />
          </div>
          {/* Components & Navbar */}
          <div
          // className={
          //   hamb
          //     ? " transition-all px-4 py-2  duration-150 w-full h-screen"
          //     : " w-full h-screen  px-4 py-2   z-50 transition-all duration-150 "
          // }
          >
            <div className="">
              {" "}
              <Wcomponenet />
            </div>
          </div>
        </section>
      </div>
    );
  };
};

export default AdminLayoutHoc;
