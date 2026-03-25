import express from 'express';
const app=express();
const port=3001;
const users=[{"id":1,"name":"Parshvi", "email":"parshvi@email.com"}];
app.use(express.json());
app.get('/users',(req,res)=>{
    res.status(200).json(users);
});

app.get('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(u=>u.id===userId);    
    if(userIndex !== -1){
        res.status(200).json(users[userIndex]);
    }else{  
        res.status(404).json({message:"User not found"});
        
    }
});
app.post('/create',(req,res)=>{
    const userdata=req.body;
    const existingUser=users.find(u=>u.email===userdata.email);
    if(existingUser){
        return res.status(409).json({message:"User already exists"});
    }

    const newuser={
        id: Date.now(),
        ...userdata
    }
    users.push(newuser);
    res.status(201).json(newuser);
});

app.put('/edit/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(u=>u.id===userId);

    if(userIndex===-1){
        return res.status(404).json({message:"User not found"});
    }

    const existingUser=users.find(
        u=>u.email===req.body.email && u.id!==userId
    );

    if(existingUser){
        return res.status(409).json({message:"User already exists"});
    }

    users[userIndex]={
        ...users[userIndex],
        ...req.body,
        id:userId
    };

    res.status(200).json(users[userIndex]);
});

app.delete('/delete/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(u=>u.id===userId);

    if(userIndex===-1){
        return res.status(404).json({message:"User not found"});
    }

    const deletedUser=users.splice(userIndex,1)[0];
    res.status(200).json({message:"User deleted successfully",user:deletedUser});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});