function register(cb){
    setTimeout(()=>{
      console.log('register end');
    },8000)
    
}
function sendEmail(){
    setTimeout(()=>{
      console.log('send email end');
    },3000)
    
}
function login(){
    setTimeout(()=>{
      console.log('login end');
    },2000)
    
}
function getData(){
    setTimeout(()=>{
      console.log('get data end');
    },1000)
    
}
function displayData(){
    setTimeout(()=>{
      console.log('display Data end');
    },4000)
    
}

register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData(()=>{
                    console.log('call other application')
                })
            })
        })
});
sendEmail();
login();
getData();
displayData();
console.log('call other application');
});

//using promise
function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('register end');
            resolve();
        },8000)
    })
}