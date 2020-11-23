let allProducts = JSON.parse(localStorage.getItem("my_products"));
let products = allProducts ? allProducts : [
    { id: 0, name: 'T-shirt', price: 25, category: 'clothes', URL: './assets/images/1.jpg', detail: 'This product from fashion store'},
    { id: 1, name: 'aaa', price: 50, category: 'clothes', URL: './assets/images/2.jpg', detail: 'This product from fashion store' },
    { id: 2, name: 'bbb', price: 100, category: 'clothes', URL: './assets/images/3.jpg', detail: 'This product from fashion store' },
    { id: 3, name: 'ccc', price: 200, category: 'clothes', URL: './assets/images/4.jpg', detail: 'This product from fashion store' },
    { id: 4, name: 'ddd', price: 400, category: 'clothes', URL: './assets/images/5.jpg', detail: 'This product from fashion store' },
    { id: 5, name: 'eee', price: 800, category: 'clothes', URL: './assets/images/6.jpg', detail: 'This product from fashion store' },
    { id: 6, name: 'fff', price: 800, category: 'clothes', URL: './assets/images/7.jpg', detail: 'This product from fashion store' },
]

let cards = document.getElementById("cart-products");



showProducts();
function showProducts() {

    cards.innerHTML = "";
    products.forEach(function (product) {

        let card = document.createElement("div");
        let cardHeaderInfo = document.createElement("div");

        let productImage = document.createElement("img");
        productImage.src = product.URL;
        let productPrice = document.createElement("h3");
        productPrice.textContent = product.price;
        let productCategory = document.createElement("h3");
        productCategory.textContent = product.category;
        let productName = document.createElement("h2");
        productName.textContent = product.name;
        let dolarsign = document.createElement("span");
        dolarsign.textContent = ' $';
        let productDetail = document.createElement("p");
        productDetail.textContent = product.detail;

        cardHeaderInfo.appendChild(productImage);
        cardHeaderInfo.appendChild(productCategory);
        productPrice.appendChild(dolarsign);
        cardHeaderInfo.appendChild(productPrice);
        card.appendChild(cardHeaderInfo);
        card.appendChild(productName);
        card.appendChild(productDetail);
        cards.appendChild(card);


        card.className = 'cardItem';
        cardHeaderInfo.className = 'cardHeaderInfo';
        productImage.className = 'cardImg';
        productCategory.className = 'cardCategory';
        productPrice.className = 'cardPrice';
        productName.className = 'cardName';
        productDetail.className= 'cardDetail';

    }
    );

    localStorage.setItem("my_products", JSON.stringify(products));
}
