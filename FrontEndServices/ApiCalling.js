import axios from "axios"


export const GET = (url)=>{
   return axios.get(url)
}

export const POST = (url,data)=>{
    return axios.post(url,data)
}

export const PUT = (url,data)=>{
    if(data===null || data===undefined)
        return axios.put(url)
    else
        return axios.put(url,data)
}       