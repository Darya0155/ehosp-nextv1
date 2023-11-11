// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken } from "next-auth/jwt";
import { addProductType } from "../../../../bankendservice/BEService";
import { supportedMethod } from "../../../../bankendservice/utils";









export default async (req, res) =>{

  supportedMethod(req,res,"POST")
  const token=await getToken({req})
  if (token) {
    await addProductType(res,token.email,token.number,req.body);
  } else {
    res.send({
      error: "You Are Not allowed to perform this operation !",
    })
  }
}
