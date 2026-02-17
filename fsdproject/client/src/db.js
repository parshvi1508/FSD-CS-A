const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const URL=process.env.DB_URL;
function DBConnect(){
    mongoose.connect(URL)
    .then(()=>{
        console.log(`MONGO DB Connected successfully`)
    })
    .catch((err)=>{
        console.error('Error:',err.message);
    })

}
module.exports=DBConnect;