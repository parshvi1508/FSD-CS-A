const auth=(req,res,next)=>{
    
    const token=req.headers.authorization;
    if (!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    if (token!="12345"){
        return res.status(401).json({message:"Unauthorized"});
    }
    next();
}
export default auth;