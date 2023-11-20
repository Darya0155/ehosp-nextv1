import { useEffect, useState } from "react";
import { GET, POST, PUT } from "./ApiCalling";
import { useDispatch } from "react-redux";
import { setAppDetails } from "./Store/store";

export const isAppLinkedToUser = () => {
  return new Promise((res, rej) => {
    GET("/api/admin/isUserAppLinked")
      .then((apiResponse) => {
        res(apiResponse.data.status);
      })
      .catch((ApiError) => {
        res(false);
      });
  });
};

export const appReg=(data)=>{
    return new Promise((res, rej) => {
        POST("/api/admin/regApp",data)
          .then((apiResponse) => {
            res(true);
          })
          .catch((ApiError) => {
            res(false);
          });
      });
}

export const addProductType=(data)=>{
  return new Promise((res, rej) => {
    POST("/api/admin/product/addProductType",data)
      .then((apiResponse) => {
        res(true);
      })
      .catch((ApiError) => {
        res(false);
      });
  });
}

export const getAllProductTypeByAppId=(appId)=>{
  return new Promise((res, rej) => {
    GET("/api/admin/product/getAllProductTypeByAppId?appId="+appId)
      .then((apiResponse) => {
        res(apiResponse.data);
      })
      .catch((ApiError) => {
        res(false);
      });
  });
}


export const enableDisableProductType=(pid,status)=>{
  return new Promise((res, rej) => {
    PUT(`/api/admin/product/enableDisableProductType?pid=${pid}&status=${status}`)
      .then((apiResponse) => {
        res(apiResponse.data);
      })
      .catch((ApiError) => {
        res(false);
      });
  });
}

export const addProduct=(data)=>{
  return new Promise((res, rej) => {
    POST("/api/admin/product/addProduct",data)
      .then((apiResponse) => {
        res(true);
      })
      .catch((ApiError) => {
        res(false);
      });
  });
}
