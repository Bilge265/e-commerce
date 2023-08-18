export function thumbsActiveFunc(){
    const thumbs =document.querySelectorAll(".gallery-thumbs .img-fluid");
    const singleImage= document.querySelector("#single-image");
   thumbs.forEach((item) => {
    thumbs.forEach((image)=>{
        item.classList.remove("active");
    })
   item.addEventListener("click",function(){
    singleImage.src=item.src;
    item.classList.add("active");
   })
   })
}

