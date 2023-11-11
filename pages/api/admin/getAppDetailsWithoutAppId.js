// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken } from "next-auth/jwt"
import { getAppDetailsWithoutAppId, regApp } from "../../../bankendservice/BEService";
import { supportedMethod } from "../../../bankendservice/utils";






export default async (req, res) =>{

  supportedMethod(req,res,"GET")
  const token=await getToken({req})
 
  if (token) {
    await getAppDetailsWithoutAppId(res,token.email,token.number);
  } else {
    res.send({
      error: "You Are Not allowed to perform this operation !",
    })
  }
}
