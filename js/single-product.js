import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";

const productId = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) :  localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) :  localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

/* product title */
const productTitle = document.querySelector(".product-title");

productTitle.innerHTML =findProduct.name;

/* product price */
const newPriceDom = document.querySelector(".new-price");
const oldPriceDom = document.querySelector(".old-price");

newPriceDom.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDom.innerHTML = findProduct.price.oldPrice.toFixed(2);

/* product gallery */
const singleImageDom = document.querySelector("#single-image");

singleImageDom.src = findProduct.img.singleImage ;


const galleryThumbs =document.querySelector(".gallery-thumbs");
let result =""
findProduct.img.thumbs.forEach((item)=> {
result +=`
<li class="glide__slide">
<img src="${item}" alt="" class="img-fluid">
</li>
`;
});

galleryThumbs.innerHTML =result;
singleThumbs();
thumbsActiveFunc();