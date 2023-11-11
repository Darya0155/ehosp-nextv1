// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken } from "next-auth/jwt";
import { addProductType, getAllProductTypeByAppId } from "../../../../bankendservice/BEService";
import { supportedMethod } from "../../../../bankendservice/utils";









export default async (req, res) =>{
  const {appId} =req.query
  supportedMethod(req,res,"GET")
  
  getAllProductTypeByAppId(res,appId)  
  
}
