
import createCatImg from "./createCatImages.js";
import catApi from "./url.js";






let imgContainer = document.querySelector(".img")
let catButton = document.getElementById("button")
let cats;
let currentCat = 0
const request = async () => {
    try{
        const response = await fetch(catApi); 
        const data = await response.json();
        const catImg = document.getElementById('img');

        let htmlContent = '<ul>';
        // data.forEach(item => {
        //     const imgEl = document.createElement('img');
        //     imgEl.src = item.url;
        //     imgEl.alt = item.description 
        //     htmlContent += `<li>${item.id}: ${item.url}</li>`;

        //     catImg.appendChild(imgEl)
        // });

        htmlContent += '</ul>';
        
       return data
    } catch(err){
        console.log(err, "error");
    }
}


// window.onload = request;
request().then((data) => {
    cats = data
    console.log(cats);

    console.log(cats[0])


}) 


function empty(container){
    if ( container.children.length){   
        container.removeChild(container.children[0])

        // let catImg = createCatImg(cats[i].description, cats[i].url,cats[i].url)
        // imgContainer.appendChild(catImg)
        
    }

 
}



catButton.addEventListener("click", () =>{
   if (currentCat >= 10){
 
    currentCat = 0

    console.log("0 was hit")
   } 
    empty(imgContainer)
    let catImg = createCatImg(cats[currentCat].description, cats[currentCat].url,cats[currentCat].url)

    imgContainer.appendChild(catImg)
    console.log(cats[currentCat])
    currentCat++


})

