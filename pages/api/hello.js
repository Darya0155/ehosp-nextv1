// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
import { getToken } from "next-auth/jwt"







export default async (req, res) =>{
  const session =await getServerSession(req,res,authOptions)
  
  const t=await getToken({req})
  console.log(t)

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
