const postbut=document.querySelector(".post");
const getbut=document.querySelector(".get");



const data = {
    name: document.querySelector(".name").value,
    email: document.querySelector(".mail").value,
    age: document.querySelector(".age").value
  };
  
  // Create the options object for the fetch request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

postbut.addEventListener("click",function(){

const postTo=fetch("/postsayfa",options).then((res)=>{

if(res.ok){

    return response.json(); 
}else{
    throw new Error('Network response was not ok ' + response.statusText);
}

}).then(obj=>{

const mes=`name is ${obj.name} 
           age is ${obj.age}}
           mail is ${obj.mail}`;

 document.querySelector(".response").textContent=mes;          

});

});