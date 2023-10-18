import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from '../../Context/auth';
import Spinner from "../Spinner";
import axios from 'axios'


export default function AdminRoutes() {
  const [ok, setOk] = useState();
  const [auth, setAuth] = useAuth();
 
  useEffect(() => {
    const authCheck = async () => {
      // const user={
      //   name:"nishar",
      //   role:1,
      // }
      const res = await fetch(`http://localhost:8080/api/v1/auth/admin-auth`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          "login-user": JSON.stringify(auth?.user)
        },


      });

      const resp = await res.json();
      if (resp.ok) {
        setOk(true);
      }
      else {
        setOk(false)
      }

    }
    if (auth?.user) authCheck()
  }, [auth?.user]);
  // useEffect(() => {
  //   const authCheck = async () => {
  //     const res = await axios.get("http://localhost:8080/api/v1/auth/admin-auth",{
  //       headers:{
  //         user1:auth?.user
  //       },
  //     });
  //     if (res.data.ok) {
  //       setOk(true);
  //     } else {
  //       setOk(false);
  //     }
  //   };
  //   if (auth?.token) authCheck();
  // }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}