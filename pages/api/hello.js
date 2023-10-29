// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getServerSession } from "next-auth"
import {getToken} from "next-auth/jwt"
import { authOptions } from "./auth/[...nextauth]"





export default async (req, res) =>{

  const session =await getServerSession(req,res,authOptions)
  console.log(session)

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
