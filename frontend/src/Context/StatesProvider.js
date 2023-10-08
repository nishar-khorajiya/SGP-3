// import { json } from "react-router-dom";
import React from "react";
import Providercontext from "./ProviderContext";
import { useState } from "react";

const StatesProvider = (props) => {

  const [error,SetError] = useState(false)
  const [errortype,SetErrortype] = useState({type:"",msg:""})
//   const [errormsg,SetErrormsg] = useState(" ")

  const updateError=((e,type,msg)=>{
    if(e==1)
    {   
        SetErrortype({type:type,msg:msg})
      
        SetError(true)
    }
    else
    {   
        
        SetError(false)
    }
  })

  return (
    <Providercontext.Provider value={{error:error,updateError:updateError,errortype:errortype}}>
      {props.children}
    </Providercontext.Provider>
  )
}

export default StatesProvider;