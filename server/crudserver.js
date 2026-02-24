import http from 'http';
import os from 'os';
const port = 4001;
const data = [];
const server = http.createServer((req, res) => {
    const url=req.url;
    const method=req.method;
    if(url=="/" && method=="GET"){
        res.statusCode = 200;
        res.end("<h1>Home Page </h1>");
        
    }
    else if(url=="/users" && method=="GET"){
        res.end("<h1>Users Page </h1>");
    }
    else if(url.startsWith("/users/") && method=="GET"){
        res.end("<h1>Search Page </h1>");
    }
    else if(url=="/createuser" && method=="POST"){
        res.end("<h1>Create User Page </h1>");
    }
        else if(url.startsWith("/users/") && method=="PUT"){
            res.end("<h1>Update User Page </h1>");
        }
        else if(url.startsWith("/users/") && method=="DELETE"){
            res.end("<h1>Delete User Page </h1>");
        }
        users.slice(userIndex,1);
        console.log('User ${id'} not found');
            
        else{
            res.statusCode = 404;
            res.end("<h1>Error Pge</h1>");
        }

})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});