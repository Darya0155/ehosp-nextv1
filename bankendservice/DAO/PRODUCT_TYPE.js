import { v1 } from "uuid";
import { putItemDB, queryFromDB, scanFromDB, updateDB } from "../DynamoDB";

export const addProductTypeDB = async ({appId, productType, enabled}) => {
    var params = {
      TableName: "product_type",
      Item: {
        productTypeId: { S: v1() },
        APP_ID: { S: appId },
        PRODUCT_TYPE: { S: productType },
        isEnabled: { BOOL: enabled },
      },
    };
  
    return putItemDB(params)
};

export const getAllProductTypeByAppIdDB=async (appId)=>{

    var params={
        TableName:  "product_type",
        ExpressionAttributeValues: {
            ":appId": { S: appId }
          },
        FilterExpression: "APP_ID = :appId ",
        
    }
    return scanFromDB(params);
}
export const enableDisableProductTypeDB=async (pid,status)=>{

  // var params = {
  //   ExpressionAttributeValues: {
  //     ":ID": { S: pid },
  //   },
  //   KeyConditionExpression: "productTypeId = :ID",
  //   TableName: "product_type",
  // };

  // const {Items}=await queryFromDB(params)
  // const item=Items[0];
console.log()
  var params2 = {
    TableName:  "product_type",
    Key: {
      productTypeId:{S:pid} ,
    },
    UpdateExpression: "set isEnabled = :isEnabled",
    // ConditionExpression: "productTypeId = :ID",
    ExpressionAttributeValues: {
        ":isEnabled": {BOOL:status==='true'?true:false},
        // ":ID":{S:pid}
    },
    ReturnValues: "ALL_NEW"
  }
  return updateDB(params2);
}