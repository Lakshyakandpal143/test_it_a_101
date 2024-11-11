let btn=document.querySelector("#topGit");
btn.addEventListener("click",async()=>{
    console.log("button clicked");
    let ul=document.querySelector("ul");
    let res= await callapi();
    for(let i=0;i<10;i++){
        ul.innerText=res;
    }
})

let url="https://api.github.com/users";

async function callapi() {
    let login=[];
    try{
        let git=await axios.get(url);
        let arr=git.data;
        for(let i=0;i<10;i++){
            login.push(arr[i].login);
        }
        return login;
    }
    catch(err){
        console.log("error:",err);
    }
}