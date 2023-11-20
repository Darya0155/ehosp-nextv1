import { useEffect, useState } from "react"
import DataTables from "../ui-components/DataTable"
import { ImageFileUpload } from "../ui-components/ImageFileUpload"
import { POST } from "../FrontEndServices/ApiCalling";








export default function Home() {
  const [image,setImage]=useState();

  const products=[
    {code:"A",name:"N1"},
    {code:"b",name:"N2"}
  ]
  useEffect(()=>{
  
    console.log(image)
    if(image)
      POST("/api/hello",image).then(r=>console.log(r))
    
    console.log(image)
  
  },[image])


  return (
    <div className="w-1/2">
         <ImageFileUpload   maxSizeInKB={1024} setImageBinary={setImage}/>
    </div>
    
  )
}

