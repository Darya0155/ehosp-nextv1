import { addProductTypeDB, enableDisableProductTypeDB, getAllProductTypeByAppIdDB } from "./DAO/PRODUCT_TYPE";
import { addUserAppLink, findUserAPPLinkByEmailAndPhone } from "./DAO/USER_APP_LINK";
import { uploadToS3 } from "./S3";
import { addProductDB } from "./DAO/PRODUCT";


export const  isAppLinkedToUser=async (res,email,phone)=>{
    const response =await findUserAPPLinkByEmailAndPhone(email,phone);
    if(!response || response.Count==0){
       res.status(404).send({"status":false}) 
    }else{
       res.status(200).send({"status":true}) 
    }
}

export const regApp=async (res,email,phone,data)=>{

   const response =await findUserAPPLinkByEmailAndPhone(email,phone);
   console.log(response)
   if(!response || response.Count!=0){
      return res.status(200).send("This user Already registerd")
   }

   addUserAppLink(email,phone,data).then(dbRespone=>{
      console.log(dbRespone)
      res.status(200).send({"message":"Saved"})
   }).catch(error=>{
      console.log(error)
      res.status(500).send("FAILED")
   })
   
}

export const  getAppDetailsWithoutAppId=async (res,email,phone)=>{
    const response =await findUserAPPLinkByEmailAndPhone(email,phone);
    if(!response || response.Count==0){
      return res.status(404).send({"message":"NOT Found"}) 
    }else{
      return res.status(200).send(response.Items) 
    }
}
export const addProductType=async (res,email,phone,data)=>{
   const {Items} =await findUserAPPLinkByEmailAndPhone(email,phone);
    data.appId=Items[0].ID.S;
    addProductTypeDB(data).then(dbResponse=>{
      res.status(200).send({status:"success"})
    }).catch(error=>{
      console.log(error)
      res.status(500).send({status:"Failed"})
    })
   
}

export const getAllProductTypeByAppId=async (res,appId)=>{
   const productTypeList=getAllProductTypeByAppIdDB(appId)
   productTypeList.then(DBResp=>{
      res.status(200).send(DBResp)
   }).catch(error=>{
      res.status(500).send("Failed")
   })
   
}


export const enableDisableProductType=async (res,email,phone,pid,status)=>{
   console.log(email,phone,pid,status)

   const response=await enableDisableProductTypeDB(pid,status)
   if(response){
      res.status(200).send(response)
   }else{
      res.status(500).send(Failed)
   }
   
}

export const uploadImageToS3=async ({data,type,name})=>{
   const params ={
      Body:Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""),'base64'),
      Bucket:process.env.AWS_BUCKET_NAME,
      Key:name,
      ContentType:type
    };
    
   return await uploadToS3(params)
}

export const addProduct=async (res,email,phone,data)=>{
   const {Items} =await findUserAPPLinkByEmailAndPhone(email,phone);
    data["appId"]=Items[0].ID.S;
    const {Location}=await uploadImageToS3(data.image)
    data["image"]=Location
    
    addProductDB(data).then(dbResponse=>{
      res.status(200).send({status:"success"})
    }).catch(error=>{
      console.log(error)
      res.status(500).send({status:"Failed"})
    })
} 