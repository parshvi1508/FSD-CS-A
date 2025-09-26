const username="parshvi1508";
const url="https://parshvijain.vercel.app";
const pr=fetch(url);
pr.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise is settled");
});