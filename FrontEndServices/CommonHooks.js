import { useEffect, useState } from "react";
import { GET } from "./ApiCalling";
import { useDispatch } from "react-redux";
import { setAppDetails } from "./Store/store";


export const useAppDetailsWithoutAppId=()=>{
    const [flag,setFlag]=useState(false)
    const dispatch=useDispatch();
  
    useEffect(()=>{
      GET("/api/admin/getAppDetailsWithoutAppId")
      .then((apiResponse) => {
        dispatch(setAppDetails(apiResponse.data[0]))
      })
      .catch((ApiError) => {
        dispatch(setAppDetails(null))
      });
    },[false])
  
  
    const reload=()=>{
      setFlag(value=>!value);
    }
     return {reload}
  }