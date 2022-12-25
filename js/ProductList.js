showProducts(products);

let form=document.getElementById('form-id');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let searchValue=document.getElementById('search-bar').value;
    if(searchValue.trim()==""){
        return;
    }
    localStorage.setItem('search',searchValue);
    location.href='Search.html';
    
})
const applyFilter=()=>{
    localStorage.setItem('brandName',document.getElementById('brand').value);
    localStorage.setItem('priceRange',document.getElementById('price').value);
    location.href="FilterProducts.html";
}