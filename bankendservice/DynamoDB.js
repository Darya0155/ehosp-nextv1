var AWS = require('aws-sdk');

AWS.config.update({region: process.env.AWS_DYNAMAODB_REGION,    accessKeyId: process.env.AWS_DYNAMAODB_KEY ,
     secretAccessKey: process.env.AWS_DYNAMAODB_SECRET});



export const DB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

export const putItemDB=(params)=>{
  return new Promise((res, rej) => {
    DB.putItem(params, (error, data) => {
      if (error) {
        rej(error);
      } else {
        res(data);
      }
    });
  });
}

export const queryFromDB=(params)=>{
  return new Promise((res, rej) => {
    DB.query(params, (error, data) => {
      if (error) {
        rej(error);
      } else {
        res(data);
      }
    });
  });
}

export const scanFromDB=(params)=>{
  return new Promise((res, rej) => {
    DB.scan(params, (error, data) => {
      if (error) {
        rej(error);
      } else {
        res(data);
      }
    });
  });
}

export const updateDB=(params)=>{
  return new Promise((res, rej) => {
    DB.updateItem(params, (error, data) => {
      if (error) {
        rej(error);
      } else {
        res(data);
      }
    });
  });
}