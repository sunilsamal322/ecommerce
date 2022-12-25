let filteredProducts=[];
let searchItem=localStorage.getItem('search');

if(searchItem!=null){
    products.filter((product)=>{
        if(product.name.toLowerCase().startsWith(searchItem.toLowerCase()) || product.brand.toLowerCase().startsWith(searchItem.toLowerCase()) ){
            filteredProducts=[product,...filteredProducts];
        }
    })
    showProducts(filteredProducts);
}
else{
    showProducts(products);
}
if(filteredProducts.length==0){
    showProducts(products);
}
