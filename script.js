/*const obj =[{
    id:1,
    name:"Catalogue Sample",
    image:"./Img/products/f1.jpg"
},
{
    id:1,
    name:"Object 2 Sample",
    image:"./Img/products/f2.jpg"
}]

function renderProduct(){
    const mainContainer = document.getElementById("render-products");
    for(let i=0; i< obj.length; i++){
        const subMainCont = document.createElement("div");

        const nameElem = document.createElement("p");
        nameElem.className = "product-name";
        nameElem.textContent = obj[i].name;

        const imageElem = document.createElement("img");
        imageElem.className = "image-css";
        imageElem.src = obj[i].image;

        subMainCont.appendChild(imageElem);
        subMainCont.appendChild(nameElem);
        mainContainer.appendChild(subMainCont);
    }
}
renderProduct();      */