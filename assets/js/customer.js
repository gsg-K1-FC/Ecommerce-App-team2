let storedProducts = JSON.parse(localStorage.getItem("products"));
let cartItem = storedProducts ? storedProducts : [];
let productWrapper = document.getElementById("cart-products");
let products=[{
    id: 0, 
    name: "coat",
    price: 660,
    category: "clothes",
    URL: "../../assets/images/coot.jpg"},
    {
        id: 1, 
        name: "palette",
        price: 110,
        category: "Makeup",
        URL: "../../assets/images/palette.jpg"},
        {
            id: 2, 
            name: "sneaker",
            price: 264,
            category: "shoes",
            URL: "../../assets/images/nike.jpg"},
            {
                id: 3, 
                name: "lipstick",
                price: 60,
                category: "Makeup",
                URL: "../../assets/images/lipstick.jpg"
            },
            {
                id: 4, 
                name: "scarft",
                price: 80,
                category: "clothes",
                URL: "../../assets/images/scarf.webp"
            },
            {
                id: 0, 
                name: "boot",
                price: 320,
                category: "shoes",
                URL: "../../assets/images/images.jpg"
            },
            
];
function createCart(products){
    productWrapper.innerHTML = "";
    products.forEach(function(product){
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
        productWrapper.appendChild(card);
        
        
        card.className = 'cardItem';
        cardHeaderInfo.className = 'cardHeaderInfo';
        productImage.className = 'cardImg';
        productCategory.className = 'cardCategory';
        productPrice.className = 'cardPrice';
        productName.className = 'cardName';
        productDetail.className= 'cardDetail'


        let cartIcon = document.createElement("i");
        let cartButton = document.createElement("button");
        let addButton = document.createElement("div");
        cartButton.appendChild(cartIcon);
        addButton.appendChild(cartButton);
        addButton.className = 'addButton';
        card.appendChild(addButton);
        cartIcon.className = 'fas fa-cart-plus';
        cartButton.className = 'buttonStyle';
        cartButton.addEventListener('click', function(){
            cartItem.push(product);
            localStorage.setItem("products", JSON.stringify(cartItem));
        })
    });
}
createCart(products);
    let searchForm = document.getElementById('form');
    searchForm.addEventListener('submit', function(e){
        e.preventDefault();
        let searchProduct = document.getElementById("search-engine").value.toLowerCase();
        let search = products.filter((product) => product.name == searchProduct);
        createCart(search);
    })
    let back = document.getElementsByClassName('backButton')[0];
    back.addEventListener('click', function(){
        createCart(products);
    });
    let clothes = document.getElementById("clothes");
    clothes.addEventListener('click', function(){
        let clothesProduct = products.filter((product) => product.category == "clothes")
            createCart(clothesProduct);
    })
    let makeup = document.getElementById("makeUp");
    makeup.addEventListener('click', function(){
        let makeUpProduct = products.filter((product) => product.category == "Makeup")
            createCart(makeUpProduct);
    })
    let shoes = document.getElementById("shoes");
    shoes.addEventListener('click', function(){
        let shoesProduct = products.filter((product) => product.category == "shoes")
            createCart(shoesProduct);
    })
    let assending = document.getElementById("ascendingOrder");
    assending.addEventListener('click', function(){
        products.sort((a, b) => a.price-b.price)
        createCart(products);

    })
    let descendingOrder = document.getElementById("descendingOrder");
    descendingOrder.addEventListener('click', function(){
        products.sort((a, b) => b.price-a.price)
        createCart(products);

    })