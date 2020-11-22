// let search = document.getElementsByClassName("search-engine");
// let product = document.getElementsByClassName("item");
// let list = document.createElement("li");
// list.appendChild(product);
// for (i = 0; i < li.length; i++) {
//     let a = li.product[0];
//     txtValue = a.textContent;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "block";
//       } else {
//         li[i].style.display = "none";
//       }
// }
let productWrapper = document.getElementsByClassName("products")[0];
console.log(productWrapper);
let products=[{
    id: 0, 
    name: "T-shirt",
    price: 25,
    category: "clothes",
    URL: "../../assets/images/coot.jpg"},
    {
        id: 1, 
        name: "T-shirt",
        price: 35,
        category: "clothes",
        URL: "./images/coot.jpg"}];
    products.forEach(function(product){
        let card = document.createElement("div");
        productWrapper.appendChild(card);
        let productImage = document.createElement("img");
        productImage.src = product.URL;
        let categoryPrice = document.createElement("div");
        card.appendChild(productImage);
        let productName = document.createElement("span");
        card.appendChild(productName);
        let productPrice = document.createElement("h3");
        card.appendChild(productPrice);
        let productCategory = document.createElement("h3");
        card.appendChild(productCategory);
        let descrption = document.createElement("div");
        card.appendChild(descrption);
        
    })
    


