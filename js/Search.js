let filteredProducts=[];
let searchItem=localStorage.getItem('search');
if(searchItem!=null)
products.filter((product)=>{
    if(product.name.toLowerCase().startsWith(searchItem.toLowerCase()) || product.brand.toLowerCase().startsWith(searchItem.toLowerCase()) ){
        filteredProducts=[...filteredProducts,product];
    }
})
if(filteredProducts.length==0){
    document.write('<div style="text-align:center;margin-top:100px;color:red"><h1>No product Found</h1>');
    document.write('<a style="font-size:20px;" href="ProductList.html">Back to product Page</a>')
    document.write('</div>');
}
else{
showProducts(filteredProducts);
}
