
import { useSession, signIn, signOut } from "next-auth/react"
import axios from "axios"

const SecurePage=({children})=>{
    const { data: session } = useSession()

 
  const f1=()=>{
    axios.get("/api/hello").then(res=>{
      console.log(res)
    })
  }


  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        token {session.accessToken} <br />
        {children}
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={() => f1()}>hi</button>
      </>
    )
  }
  return (
     <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => f1()}>hi</button>
    </>
  )
}
export default SecurePage;