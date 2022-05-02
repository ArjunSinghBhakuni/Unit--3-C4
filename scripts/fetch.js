
let newsSearch = async (url)=>{

 let res = await fetch(url)

 let data = await res.json();
 //console.log(data)
 return  data.articles ;
}
 

let append = (data,results)=>{

 data.forEach(({title,description,urlToImage})=>{

 let div = document.createElement("div")
div.setAttribute("class","news")

 let img = document.createElement("img")
 img.src = urlToImage;

 let innerdiv = document.createElement("div")
 
 let h3 = document.createElement("h3")
 h3.innerText = title;

 let p = document.createElement("p")
 p.innerText = description;
 
let newsdata  = {
 urlToImage,
 title,
 description
}

 div.onclick =()=>{
  storenews(newsdata)
 }

 innerdiv.append(h3,p)
 div.append(img,innerdiv)
results.append(div)

 })
}
function storenews(newsdata){
window.location.href ="news.html"

 localStorage.setItem("news",JSON.stringify(newsdata))
}

export {newsSearch , append}