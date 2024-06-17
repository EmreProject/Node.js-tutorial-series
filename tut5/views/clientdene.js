"use strict"


console.log("hellloo");


const obj1=fetch("clientdene.json").then(res=>{

return res.json();

}).then((obj)=>{

console.log(obj);

const title=document.querySelector("h3");
title.textContent=title.textContent.replace("?", obj.name);

const other=[...document.querySelectorAll("h3")];
other.splice(0,1);
other[0].textContent=other[0].textContent.replace("?", obj.age);

other[1].textContent=other[1].textContent.replace("?",obj.hobbies.join("-"));
}).catch(()=>"error on fetch");