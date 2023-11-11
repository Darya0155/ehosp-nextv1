import ArrowUpTrayIcon from '@heroicons/react/24/outline/ArrowUpTrayIcon'

import { useEffect, useState } from 'react'
import TrashIcon from "@heroicons/react/24/outline/TrashIcon"

export const ImageFileUpload=({imageDataUrl,setImageDataUrl})=>{
    const [image,setImage]=useState();
   


    useEffect(()=>{
      const fileReader=new FileReader()
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result) {
          setImageDataUrl(result)
        }
      }
      if(image)
       fileReader.readAsDataURL(image)
      if(!image)
        setImageDataUrl("")

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
              <span class="mt-2 text-base leading-normal">
                Select a file
               </span>
              <input type="file" class="hidden"  onChange={onUploadChange}/>
            </div>
        </label> }

        {image && <button className='w-full hover:bg-red-400 hover:text-white border-2 p-2 mt-2 rounded-lg justify-center flex' variant='outlined' onClick={()=>setImage(null)}>
                        <TrashIcon  className='w-8 h-8'/>  
                    </button>}
        
    
    </>
}