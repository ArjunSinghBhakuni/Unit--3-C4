// Ude Import export (MANDATORY)

import navbar  from "../components/navbar.js";

 document.getElementById("navbar").innerHTML = navbar();
  
 
 
 import {newsSearch,append} from "./fetch.js"

 let { urlToImage,
  title,
  description,} = JSON.parse(localStorage.getItem("news"))


  let div = document.createElement("div")

  let img = document.createElement("img")

  img.src = urlToImage;
  let h3 = document.createElement("h3")
h3.innerText = title;
  let p = document.createElement("p")
  p.innerText = description;

  div.append(img,h3,p)

  document.getElementById("detailed_news").append(div)

  let searchnews ;
  let search =(e) =>{

   if(e.key === "Enter"){
      window.location.href = "search.html"
    let search_input = document.getElementById("search_input").value
   
  localStorage.setItem("search",search_input)
   
   
  
  }
  }
  
   document.getElementById("search_input").addEventListener("keydown",search)
    
  