//let allProducts = JSON.parse(localStorage.getItem("my_products"));
let products = [
    { id: 0, name: 'T-shirt', price: 25, category: 'clothes', URL: './assets/images/1.jpg', detail: 'This product from fashion store'},
    { id: 1, name: 'aaa', price: 50, category: 'clothes', URL: './assets/images/2.jpg', detail: 'This product from fashion store' },
    { id: 2, name: 'bbb', price: 200, category: 'clothes', URL: './assets/images/3.jpg', detail: 'This product from fashion store' },
    { id: 3, name: 'ccc', price: 200, category: 'clothes', URL: './assets/images/4.jpg', detail: 'This product from fashion store' },
    { id: 4, name: 'ddd', price: 330, category: 'clothes', URL: './assets/images/5.jpg', detail: 'This product from fashion store' },
    { id: 5, name: 'eee', price: 75, category: 'clothes', URL: './assets/images/6.jpg', detail: 'This product from fashion store' },
    { id: 6, name: 'fff', price: 425, category: 'clothes', URL: './assets/images/7.jpg', detail: 'This product from fashion store' },
    { id: 7, name: 'ggg', price: 170, category: 'clothes', URL: './assets/images/8.jpg', detail: 'This product from fashion store' }
]

let cards = document.getElementById("cart-products");
//localStorage.setItem("my_products", JSON.stringify(products));


showProducts();
function showProducts() {

    cards.innerHTML = "";
    products.forEach(function (product, i) {

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
        let deleteBtn = document.createElement("button");
        let deleteIcon = document.createElement("i");
        deleteIcon.className = 'fa fa-trash deleteIcon';
        deleteBtn.appendChild(deleteIcon);

        cardHeaderInfo.appendChild(productImage);
        cardHeaderInfo.appendChild(productCategory);
        productPrice.appendChild(dolarsign);
        cardHeaderInfo.appendChild(productPrice);
        card.appendChild(cardHeaderInfo);
        card.appendChild(productName);
        card.appendChild(productDetail);
        card.appendChild(deleteBtn);
        cards.appendChild(card);


        card.className = 'cardItem';
        cardHeaderInfo.className = 'cardHeaderInfo';
        productImage.className = 'cardImg';
        productCategory.className = 'cardCategory';
        productPrice.className = 'cardPrice';
        productName.className = 'cardName';
        productDetail.className= 'cardDetail';
        deleteBtn.id = 'cartDeleteBtn';


        deleteBtn.addEventListener("click", function() {
            let confirmDelete = confirm("Are you sure you want to delete this product from your cart?");
        
            if (confirmDelete) {
                products.splice(i,1);
                showProducts();
                sum=0;
                calcSum();
            }
            
        });
        


    }
    );



    
}

let cartSum = document.getElementById("cartSum");
let cartTax = document.getElementById("cartTax");
let cartTotlaSum = document.getElementById("cartTotalSum");
let sum = 0, tax,totalSum;

function calcSum() {
    for (let index = 0; index < products.length; index++) {

        sum += products[index].price;
        
    }
    tax = 0.15*sum;
    totalSum = sum + tax;
    cartSum.textContent = sum + " $";
    cartTax.textContent = tax + " $";
    cartTotlaSum.textContent = totalSum + " $";
}


calcSum();



