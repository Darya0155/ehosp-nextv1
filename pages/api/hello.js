// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
import { getToken } from "next-auth/jwt"
import { S3,  createTempImageFile,   listAll, putObject } from "../../bankendservice/S3"
import { v1 } from "uuid"
const fs =require("fs")







export default async (req, res) =>{
  const session =await getServerSession(req,res,authOptions)
  
  const t=await getToken({req})

  // console.log(req.body)

  

 

 
  


  if (session) {
    res.send({
      content:
        "Successs",
    })
  } else {
    res.send({
      error: "Failed",
    })
  }
 
}
