// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken } from "next-auth/jwt"
import { isAppLinkedToUser } from "../../../bankendservice/BEService"

export default async (req, res) =>{
  const token=await getToken({req})
 
  if (token) {
    const serviceResponse=await isAppLinkedToUser(res,token.email,token.number);
  } else {
    res.send({
      error: "You Are Not allowed to perform this operation !",
    })
  }
}
