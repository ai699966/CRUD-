var productName = document.getElementById("name");
var productPrice = document.getElementById("salary");
var productCategory = document.getElementById("type");
var productDescr = document.getElementById("descr");
var table = document.querySelector("#add");
var button = document.querySelector("button");
var currentIndex
    if (localStorage.getItem('productList') == null) {
        var product = []; 
    } else {
        product = JSON.parse(localStorage.getItem('productList'))
        displayProduct()
    }

// check validation 
function validate() {
    if (productName.value != '' && productPrice.value != '' && productCategory.value != '') {
        var validator = true
    
    } else {
        validator = false
    }
    return validator
    
}

function addProduct() {
    
if (validate()) {
    if (button.innerHTML == 'Update') {
        product[currentIndex].name =productName.value ;
        product[currentIndex].price = productPrice.value;
        product[currentIndex].type = productCategory.value;
        product[currentIndex].Descr = productDescr.value;
        button.innerHTML = 'Add Product';
        localStorage.setItem('productList', JSON.stringify(product))
        displayProduct()
        clearProduct();
    } else {
        
        let addProduct = {
            name : productName.value,
            price :productPrice.value,
            type : productCategory.value,
            Descr : productDescr.value
        };
        product.push(addProduct);
        localStorage.setItem('productList', JSON.stringify(product))
        displayProduct()
        clearProduct();
        console.log(product);
    }
} else {
    alert('please Fill all information')
}
  
}
function displayProduct() {
    let cartona = ``;
    for (let index = 0; index < product.length; index++) {
          cartona += `<tr>
                          <td>${index}</td>
                          <td>${product[index].name}</td>
                          <td>${product[index].price}</td>
                          <td>${product[index].type}</td>
                          <td>${product[index].Descr}</td>
                          <td><button class="btn btn-outline-warning" onclick="updateProduct(${index})">Update</button></td>
                          <td><button class="btn btn-outline-danger" onclick="deletProduct(${index})">Delete</button></td>
                          
                      </tr>
                      `;      
    }
    table.innerHTML = cartona;
}
function clearProduct() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescr.value = "";
}
function updateProduct(param) {
    currentIndex = param;
    productName.value = product[param].name;
    productPrice.value = product[param].price;
    productCategory.value = product[param].type;
    productDescr.value = product[param].Descr;
    button.innerHTML = 'Update';
    
}
function deletProduct(param) {
    product.splice(param,1);
    localStorage.setItem('productList', JSON.stringify(product))
    displayProduct()
}






function searchProducts(term) {
    let cartoona = ``;
    for (let i = 0; i < product.length; i++) {

        if (product[i].name.toLowerCase().includes(term.toLowerCase()) == true || product[i].type.toLowerCase().includes(term.toLowerCase()) == true || product[i].price.includes(term)) {
            cartoona += `<tr>
            <td>${i}</td>
            <td>${product[i].name}</td>
            <td>${product[i].price}</td>
            <td>${product[i].type}</td>
            <td>${product[i].Descr}</td>
            
            <td> <button class="btn btn-outline-warning">update</button></td>
            <td> <button  onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`;
        }
    }
    document.getElementById("add").innerHTML = cartoona;
}


// function searchProducts(term) {
//     var cartoona = ``;
//     for (var i = 0; i < productsContainer.length; i++) {

//         if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
//             cartoona += `<tr>
//             <td>${i}</td>
//             <td>${productsContainer[i].name}</td>
//             <td>${productsContainer[i].price}</td>
//             <td>${productsContainer[i].category}</td>
//             <td>${productsContainer[i].desc}</td>
//             <td> <button class="btn btn-outline-warning">update</button></td>
//             <td> <button  onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
//         </tr>`;
//         }
//     }
//     table.innerHTML = cartoona;
// }