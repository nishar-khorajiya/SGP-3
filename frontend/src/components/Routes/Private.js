import { useState,useEffect } from "react";
import axios from 'axios';
import { Outlet } from "react-router-dom";
import {useAuth} from '../../Context/auth';
import Spinner from "../Spinner";



export default function PrivateRoutes(){
    const [ok,setOk]=useState();
    const [auth,setAuth]=useAuth();
    useEffect(()=>{
        const authCheck =async()=>{
            const res=await fetch(`http://localhost:8080/api/v1/auth/user-auth`, {
                method: 'get',
                // headers: {
                //   'Content-Type': 'application/json',
                //   "authorization":auth?.token
                  
                // },
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": auth?.token
                },
                
             
              });

              const resp = await res.json();
              if(resp.ok){
                setOk(true);
              }
              else{
                setOk(false)
              }

            // const res = await axios.get('http://localhost:8080/api/v1/auth/user-auth');

            // if(res.data.ok){
            //   setOk(true)
            //   console.log("ok")
            // }
            // else{
            //   setOk(false)
            //   console.log("not ok")
            // }
        }
        if(auth?.token) authCheck()
    },[auth?.token]);

    return ok ? <Outlet/>:<Spinner/>;
}