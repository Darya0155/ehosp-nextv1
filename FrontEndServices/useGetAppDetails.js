import { useState } from "react"


export const useGetAppDetails=()=>{
    const [data,SetData]=useState()
    return {data}
}