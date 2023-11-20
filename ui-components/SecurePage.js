
import { useSession, signIn, signOut } from "next-auth/react"
import axios from "axios"

const SecurePage=({children})=>{
    const { data: session } = useSession()

    


  if (session) {
    return (
      <>
        
        {children}
       
        {/* <button onClick={() => signOut()}>Sign out</button>
        */}
      </>
    )
  }
  return (
     <div className="flex justify-center">
      
      <button className="bg-green-500  rounded-xl text-white hover:bg-green-800 py-3
                         text-xl hover:border-20 w-96 mt-64" onClick={() => signIn()}>Sign in</button>
      {/* <button onClick={() => f1()}>hi</button> */}
    </div>
  )
}
export default SecurePage;