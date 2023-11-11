// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken } from "next-auth/jwt"
import { supportedMethod } from "../../../../bankendservice/utils"
import { enableDisableProductType } from "../../../../bankendservice/BEService"








export default async (req, res) =>{
  supportedMethod(req,res,"PUT")
  const token=await getToken({req})
  const {pid,status} = req.query
  if (token) {
    return enableDisableProductType(res,token.email,token.number,pid,status)
  } else {
    res.send({
      error: "You Are Not allowed to perform this operation !",
    })
  }
}