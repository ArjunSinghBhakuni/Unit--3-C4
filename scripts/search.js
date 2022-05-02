// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar  from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar();
 

 import {newsSearch,append} from "./fetch.js"
 
let search =(e) =>{

 if(e.key === "Enter"){
   // window.location.href = "search.html"
  let search_input = document.getElementById("search_input").value
  let url = ` https://masai-mock-api.herokuapp.com/news?q=${search_input}`
 
 newsSearch(url).then((res)=>{
  //console.log(res)
  
  let results = document.getElementById("results")
  results.innerHTML = null
  append(res,results)
   
 
 })

}
}

 document.getElementById("search_input").addEventListener("keydown",search)
  
let sea = localStorage.getItem("search")

function printnews(sea){

 let url = ` https://masai-mock-api.herokuapp.com/news?q=${sea}`
  console.log(url)
  console.log(sea)
 newsSearch(url).then((res)=>{
  //console.log(res)
  
  let results = document.getElementById("results")
  results.innerHTML = null
  append(res,results)
   
 
 })

}
printnews(sea)