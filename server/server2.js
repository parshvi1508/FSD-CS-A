import http from "http";
import os from "os";

const port=4002;
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url=="/" && method=="GET"){
         res.write("Home page");
    }
    else if(url=="/contact" && method=="GET"){
         res.write("Contact page");
    }
    else if(url=="/system" && method=="GET"){
        //informatiion of our system

      //since this is object but sysdata is string format so we have to convert into string 
      //thios is done through JSON.stringify() method  
        const sysdata={
            operatingSystem:os.platform(),
            architecture:os.arch(),
            cpuLength:os.cpus().length,
            TotalMemory:(os.totalmem()/1024**3).toFixed(2),
            freeMemory:(os.freemem()/1024**3).toFixed(2),
            network:os.networkInterfaces()
        }
         res.write(JSON.stringify(sysdata));
    }
    else if(url=="/users" && method=="GET"){
         res.write("List of Users page");
    }
    else if(url=="/createuser" && method=="POST"){
         res.write("Create User page");
    }
    else if(url.startsWith("/users") && method=="GET"){
         res.write("Search user");
    }
     else if(url.startsWith("/users") && method=="PUT"){
         res.write("Update user");
    }
     else if(url.startsWith("/users") && method=="DELETE"){
         res.write("Delete user");
    }
    else{
        res.write("error page");
    }
    res.end();
});

//bind the function and then execute the server 
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})