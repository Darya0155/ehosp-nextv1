import { v1 } from "uuid";
import { DB, putItemDB, queryFromDB, scanFromDB } from "../DynamoDB";


export const addUserAppLink = async (email, phone, appDetails) => {
  var params = {
    TableName: "USER_APP_LINK",
    Item: {
      ID: { S: v1() },
      EMAIL: { S: email },
      PHONE: { S: phone },
      APP_DETAILS: { S: JSON.stringify(appDetails) },
    },
  };

  return putItemDB(params)
};

export const findUserAPPLinkById = async (ID) => {
  var params = {
    ExpressionAttributeValues: {
      ":ID": { S: ID },
    },
    KeyConditionExpression: "ID = :ID",
    TableName: "USER_APP_LINK",
  };

  return queryFromDB(params)
};

export const findUserAPPLinkByEmailAndPhone = async (email, phone) => {
  var params = {
    ExpressionAttributeValues: {
      ":email": { S: email },
      ":phone": { S: phone },
    },
    FilterExpression: "EMAIL = :email AND PHONE = :phone",
    TableName: "USER_APP_LINK",
  };

  return scanFromDB(params)
};
