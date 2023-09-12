const apikey='xH6zuf8UkWF3cTKmp15u-vdE_Yv33_N3rp_GIOzuZN4';

const formel=document.querySelector("form")

const searchel=document.getElementById("search")
const searchres=document.querySelector(".searchres")
let search=""
let page=1
const showmore=document.getElementById("show-more")
formel.addEventListener(("submit"),(event)=>{
    event.preventDefault();
    search=searchel.value
    searchimage(search)
   
    


})
showmore.addEventListener("click",(event)=>{
    searchimage(search)

})
async function searchimage(search){
  
    const ans = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${apikey}`)
    const data=await ans.json()
    
    if (page===1){
        searchres.innerHTML=``
    }
    const results=data.results
    
    results.map((result)=>{
    const imagewr=document.createElement('div')
    imagewr.classList.add("searchresult")
    const imag=document.createElement('img')
    imag.src=result.urls.small
    imag.alt=result.alt_description
    const imageLink=document.createElement('a')
    imageLink.href=result.links.html
    imageLink.target="_blank"
    imageLink.textContent=result.alt_description
    imagewr.appendChild(imag)
    imagewr.appendChild(imageLink)
    imagewr.appendChild(imageLink)
    imagewr.appendChild(imageLink)
    searchres.appendChild(imagewr)
    console.log(result)
    })
    page++
    
    if (page>1){
        showmore.style.display="block"
    }
   

}


