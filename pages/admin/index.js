import axios from "axios";
import SecurePage from "../../ui-components/SecurePage";
import AdminBar from "../../ui-components/admin/AdminBar";
import React, { useEffect, useState } from 'react'
import { isAppLinkedToUser } from "../../FrontEndServices/FEService";
import { AppRegForm } from "../../ui-components/admin/AppRegForm";
import { GET } from "../../FrontEndServices/ApiCalling";
import { useAppDetailsWithoutAppId } from "../../FrontEndServices/CommonHooks";
import { useSelector } from "react-redux";






export default function AdminHome(){
    const [isAppLinkedToUserFlag,setIsAppLinkedToUserFlag]=useState(false);
    const {reload:reloadAppDetails}=useAppDetailsWithoutAppId()
    
    useEffect(()=>{
      
      isAppLinkedToUser().then(response=>{
        console.log(response)
        setIsAppLinkedToUserFlag(response)
      })
      if(isAppLinkedToUserFlag){
        reloadAppDetails()
      }


    },[isAppLinkedToUserFlag])
  

    const f1=()=>{
      GET("/api/hello").then(r=>console.log(r))
    }


    return (<SecurePage>
    <AdminBar>
      
      <div className={`flex justify-center ${isAppLinkedToUserFlag?'hidden':''}`} >
      <AppRegForm setIsAppLinkedToUserFlag={setIsAppLinkedToUserFlag} />
      </div>


      <button className="py-5 px-10 rounded-lg  text-white bg-blue-400" onClick={() => f1()}>BackendTest</button> 
    </AdminBar>
  </SecurePage>)
}