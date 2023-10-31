import axios from "axios";
import SecurePage from "../../ui-components/SecurePage";
import AdminBar from "../../ui-components/admin/AdminBar";




export default function AdminHome(){

  const f1=()=>{
    axios.get("/api/hello").then(res=>{
      console.log(res)
    })
  }
    return   (<SecurePage>
    <AdminBar>
    <button className="py-5 px-10 rounded-lg text-white bg-blue-400" onClick={() => f1()}>BackendTest</button> 
    </AdminBar>
  </SecurePage>)
}