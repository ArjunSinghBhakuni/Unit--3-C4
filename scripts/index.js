// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar  from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar();
 

 import {newsSearch,append} from "./fetch.js"
 

 
let searchnews ;
let search =(e) =>{

 if(e.key === "Enter"){
    window.location.href = "search.html"
  let search_input = document.getElementById("search_input").value
 
localStorage.setItem("search",search_input)
 
 

}
}

 document.getElementById("search_input").addEventListener("keydown",search)
  

 
 





























let url =  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
newsSearch(url).then((res)=>{
 //console.log(res)
 

 results.innerHTML = null
 append(res,results)
})

 // on click 

 let sidebar = document.getElementById("sidebar").children
 
function newess(){
//console.log("fda")
 let country =  this.id
 
 let url =  `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`
// console.log(url)
 newsSearch(url).then((res)=>{
//console.log(res)

let results = document.getElementById("results")
results.innerHTML = null
append(res,results)
 })
}
 


 
   for (let el of sidebar){
   el.addEventListener("click", newess)
  
 }



