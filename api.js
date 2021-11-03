const result= document.getElementById("result");
const myBtn=document.getElementById("myBtn");

myBtn.addEventListener("click", myFun)

function myFun(){
  fetch(' https://api.github.com/users/vkassingh/repos')
  .then(res=>res.json())
  .then( 
    data=> { /*endpoint:  https://api.github.com/users/vkassingh */
//     result.innerHTML=`Github User-name: ${data.login} <br>
//     No of Repositories: ${data.public_repos} <br>
//     blog link: <a href=${data.blog}>Dev.to/vikassingh</a><br>
//     bio: ${data.bio} <br>
//     twitter username: ${data.twitter_username}<br>
//     followers: ${data.followers} <br>
//     Joined Github on: ${data.created_at}<br>
    
//     `; 
    result.innerHTML= `first repo name: ${JSON.stringify(data[0].name)}`
      ;
  })
  
  
  
  
  .catch(error=>console.log(error.message));
}

 //invoke the function
