
export const supportedMethod=(req,res,methods)=>{
    if(req.method!==methods){
        res.status("400").send({"Error":"Method is not supported"});
    }
}