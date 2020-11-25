let products = JSON.parse(localStorage.getItem("products"));
let cards = document.getElementById("cart-products");

showProducts();
// this function is to show products in castomer cart
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

        // this function is to delete item from customer cart
        deleteBtn.addEventListener("click", function() {
            let confirmDelete = confirm("Are you sure you want to delete this product from your cart?");
        
            if (confirmDelete) {
                products = products.filter(remainingProduct => remainingProduct.id !== product.id);
                 //Make a new product list and only keep the products which don't match this deleted product's id
                 localStorage.setItem("products", JSON.stringify(products));
                 showProducts();
                calcSum();
              }        
        });
    }
    );    
}

// this function is to calculate the total price of customer cart
function calcSum() {
    let cartSum = document.getElementById("cartSum");
    let cartTax = document.getElementById("cartTax");
    let cartTotlaSum = document.getElementById("cartTotalSum");
    let sum = 0, tax,totalSum;
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



