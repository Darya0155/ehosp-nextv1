import { v1 } from "uuid";
import { putItemDB } from "../DynamoDB";

export const addProductDB = async ({appId, productTypeId, enabled ,productName ,price,availableQnt,image}) => {
    var params = {
      TableName: "product",
      Item: {
        productId: { S: v1() },
        APP_ID: { S: appId },
        productTypeId: { S: productTypeId },
        productName: { S: productName },
        price: { N: price },
        availableQnt: { N: availableQnt },
        isEnabled: { BOOL: enabled },
        image: {S:image}
      },
    };
  
    return putItemDB(params)
};
