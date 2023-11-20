import { v1 } from 'uuid';

var AWS = require('aws-sdk');
var fs=require("fs")

AWS.config.update({region: process.env.AWS_DYNAMAODB_REGION,    accessKeyId: process.env.AWS_DYNAMAODB_KEY ,
     secretAccessKey: process.env.AWS_DYNAMAODB_SECRET});



export const S3 = new AWS.S3({apiVersion: '2006-03-01'});

export const listAll=async ({buckenName,prefix})=>{
    return new Promise ( (res,rej)=>{
        S3.listObjects({Bucket:buckenName,Prefix:prefix},(error,data)=>{
            if(error)
                rej(error)
            else
                res(data)
        })
    })
}

export const putObject=async (params)=>{
    return new Promise ( (res,rej)=>{
        S3.putObject(params,(error,data)=>{
            if(error)
                rej(error)
            else
                res(data)
        })
    })
}
export const uploadToS3=async (params)=>{
    return new Promise ( (res,rej)=>{
        S3.upload(params,(error,data)=>{
            if(error)
                rej(error)
            else
                res(data)
        })
    })
}

