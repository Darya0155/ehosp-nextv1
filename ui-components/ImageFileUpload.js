import ArrowUpTrayIcon from '@heroicons/react/24/outline/ArrowUpTrayIcon'

import { useEffect, useState } from 'react'
import TrashIcon from "@heroicons/react/24/outline/TrashIcon"

import { useCommonParent } from './CommonParent';
import { v1 } from 'uuid';



export const ImageFileUpload=({maxSizeInKB,setImageBinary})=>{
  const [image,setImage] = useState([]);
  const [imageDataUrl,setImageDataUrl] = useState();
  
    const {snakbar} = useCommonParent();
     useEffect(()=>{
      const fileReader=new FileReader()
      const fileReader2=new FileReader()
      fileReader2.onload = ({ target:{result}}) => {
        if (result) {
          setImageBinary({name:v1()+"."+image.name.split(".")[image.name.split(".").length-1] ,type:image.type,data:result})
        }
      }
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          if((result.length/1024)<=maxSizeInKB){
            setImageDataUrl(result)
            fileReader2.readAsDataURL(image)
          }else{
            setImage(null)
            snakbar(true,"E","File size 1MB is allowed only!")
          }
          
        }
      }
      if(image && image instanceof Blob)
       fileReader.readAsDataURL(image)
      if(!image)
        setImageDataUrl(null)

    },[image])


    

    const onUploadChange=(data)=>{
        const {files} = data.target
        setImage(files[0])
    }
    return <>
        <img src={imageDataUrl} ></img>

        
        {!image && <label>
             <div className="w-full border-gray-500 border-2 p-3 flex justify-center">
              <ArrowUpTrayIcon className="w-6 h-6 mt-2 mr-2"/>
              <span className="mt-2 text-base leading-normal">
                Select a file
               </span>
              <input type="file" className="hidden"  onChange={onUploadChange}/>
            </div>
        </label> }

        {image && <button className='w-full hover:bg-red-400 hover:text-white border-2 p-2 mt-2 rounded-lg justify-center flex' variant='outlined' onClick={()=>setImage(null)}>
                        <TrashIcon  className='w-8 h-8'/>  
                    </button>}
        
    
    </>
}