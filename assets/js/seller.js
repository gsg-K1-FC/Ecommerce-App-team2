let storedProducts = JSON.parse(localStorage.getItem("products"));
let cartItem = storedProducts ? storedProducts : [];
let productWrapper = document.getElementById("cart-products");
let divEdit = document.getElementById("modal");
let addProductBtn= document.getElementById('addProductBtn');

// Adding products to the seller view
let products= storedProducts ? storedProducts : [{
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
            
];

// each product has an id
let idKey=0; 
if (!products.length) {
    idKey = 1;
} else {
    let lastItem = products[products.length - 1];
    idKey = Number(lastItem.id) + 1;
}

            
// creating the cart
function createCart(products){
    productWrapper.innerHTML = "";
    products.forEach(function(product, i){
        let card = document.createElement("div");
        card.setAttribute("id", i);
        let cardHeaderInfo = document.createElement("div");
        let productImage = document.createElement("img");
        let buttonDiv = document.createElement("div");
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
        let deleteIcon= document.createElement("button");
        deleteIcon.innerHTML = '<i class="fa fa-trash"></i>' ;
        deleteIcon.addEventListener("click", function () {

//   Make a functional delete button
         let confirmationResults = confirm(
                "Are you sure you want to delete this product?"
              );
        
              if (confirmationResults) {
                products.splice(i, 1);
                createCart(products);
              }
            });
        //  Make an edit button
            let editIcon = document.createElement("button");
            editIcon.innerHTML= '<i class="fa fa-edit"></i>';
        //    appending fathers to the children
        cardHeaderInfo.appendChild(productImage);
        cardHeaderInfo.appendChild(productCategory);
        productPrice.appendChild(dolarsign);
        cardHeaderInfo.appendChild(productPrice);
        buttonDiv.appendChild(deleteIcon);
        buttonDiv.appendChild(editIcon);
        card.appendChild(cardHeaderInfo);
        card.appendChild(productName);
        card.appendChild(productDetail);
        card.appendChild(buttonDiv);
        productWrapper.appendChild(card);



    //    giving dom elements classes
        card.className = 'cardItem';
        cardHeaderInfo.className = 'cardHeaderInfo';
        productImage.className = 'cardImg';
        productCategory.className = 'cardCategory';
        productPrice.className = 'cardPrice';
        productName.className = 'cardName';
        productDetail.className= 'cardDetail';
        deleteIcon.className = "productDelete";
        editIcon.className= "productEdit";
        buttonDiv.className= "cardButtons";

    });
}
createCart(products);

// this function makes the seller add the products
    document.getElementById("submit").addEventListener("click", function(event){
        event.preventDefault();
        let productName=document.getElementById("name").value.trim();
        let productDetail=document.getElementById("detail").value.trim();
        let productPrice =document.getElementById("number").value.trim();
        let  ImageUrl= document.getElementById("image-url").value.trim();
        let  categoryOfProduct = document.getElementById("dropdown").value.trim();
        let isAddedAttribute = addProductBtn.getAttribute("isadded");  
        console.log(isAddedAttribute, )
        
         if(productName === ""){
            alert("Please Enter the name of the product");
        }
        else if( productDetail === ""){
            alert("Please Enter the details  of the product");
        }
        else if(productPrice === ""){
            alert("Please Enter the price of the product");
        }
        else if(ImageUrl === ""){
            alert("Please Enter the Image of the product");
        }
        else if (categoryOfProduct === "") {
            alert ("Please select the category of the product");
        }
        else if ( isAddedAttribute) {
            products.push( {id: idKey, name: productName, price:productPrice, detail: productDetail, URL:ImageUrl, category: categoryOfProduct });
            document.getElementById("name").value=""; 
            document.getElementById("detail").value="";
            document.getElementById("number").value="";
            document.getElementById("image-url").value= "";
            document.getElementById("dropdown").value="",
            createCart(products); 
            
        }
        localStorage.setItem("products", JSON.stringify(products));
        
        modal.classList.remove('active');
        addProductBtn.setAttribute("isadded",false);
    });
   
//  Pop up form when add product button is clicked on
 addProductBtn.addEventListener('click', function(){
    addProductBtn.setAttribute("isadded", true);
     showForm()
     
 })
 function showForm () {
     modal.classList.add('active');
     }
// make an X icon which removes form
 document.getElementById("closeIcon").addEventListener('click', getOutOfForm)
 function getOutOfForm() {
   modal.classList.remove('active');

 }
