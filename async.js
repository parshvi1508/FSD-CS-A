function register(){
    setTimeout(()=>{
      console.log('register end');
    },5000);
   

}
function sendEmail(){
      setTimeout(()=>{
      console.log('email end');
    },5000);
}

function login(){
     setTimeout(()=>{
      console.log('login end');
    },5000);
}
function getData(){
    setTimeout(()=>{
      console.log('get data end');
    },5000);
}
function displayData(){
    
     setTimeout(()=>{
      console.log('display data end');
    },5000);
}

register();
sendEmail();
login();
getData();
displayData();
console.log('call other data')


//async function
async function authenticate(){
    try{
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    console.log('call other application')}
    
    catch(err){
        console.log('error')
    }
}