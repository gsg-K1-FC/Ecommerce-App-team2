let productWrapper = document.getElementsByClassName("products")[0];
console.log(productWrapper);
let products=[{
    id: 0, 
    name: "coot",
    price: 25,
    category: "Clothes",
    URL: "../../assets/images/coot.jpg"},
    {
        id: 1, 
        name: "palette",
        price: 35,
        category: "Makeup",
        URL: "../../assets/images/palette.jpg"},
        {
            id: 2, 
            name: "scarf",
            price: 35,
            category: "clothes",
            URL: "../../assets/images/scarf.webp"}];
        let cartItem=[];
function createCart(products){
    products.forEach(function(product){
        let card = document.createElement("div");
        card.className = 'cardInfo';
        productWrapper.appendChild(card);
        let productImage = document.createElement("img");
        productImage.className= 'image-style';
        productImage.src = product.URL;
        card.appendChild(productImage);
        let productPrice = document.createElement("h3");
        productPrice.textContent = product.price;
        let productCategory = document.createElement("h3");
        productCategory.textContent = product.category;
        let productName = document.createElement("span");
        productName.textContent = product.name;
        card.appendChild(productName);
        card.appendChild(productCategory);
        card.appendChild(productPrice);
        let cartIcon = document.createElement("i");
        cartIcon.className = 'fas fa-cart-plus';
        let cartButton = document.createElement("button")
        cartButton.className = 'buttonStyle';
        cartButton.appendChild(cartIcon);
        card.appendChild(cartButton);
        cartButton.addEventListener('click', function(){
            cartItem.push(product);
            console.log(cartItem);
        })
    });
}
createCart(products);
    let icon = document.getElementById('searchBtn');
    icon.addEventListener('click', function(e){
        e.preventDefault();
        let item = document.getElementById("search-engine").value;
        console.log(item);
        document.querySelectorAll('.cardInfo').forEach(function(a){
            a.remove()
            })
        let search = products.filter((product) => product.name == item);
        createCart(search);
    })