let applyFilteredProducts=[];

let brandName=localStorage.getItem('brandName');
let priceRange=localStorage.getItem('priceRange');
    
    
if(brandName!="" && priceRange!=""){
    applyFilteredProducts=[];
    products.filter(product=>{
    if(priceRange=='price500'){
        if(product.brand.toLowerCase()==brandName.toLowerCase() && product.currentPrice<500){
            applyFilteredProducts=[...applyFilteredProducts,product];
            }
        }
        else if(priceRange=='price500_1000'){
            if(product.brand.toLowerCase()==brandName.toLowerCase() && (product.currentPrice>=500 && product.currentPrice<=1000)){
            applyFilteredProducts=[...applyFilteredProducts,product];
            }
        }
        else if(priceRange=='price1000_1500'){
            if(product.brand.toLowerCase()==brandName.toLowerCase() && (product.currentPrice>=1000 && product.currentPrice<=1500)){
                applyFilteredProducts=[...applyFilteredProducts,product];
            }
        }
        else if(priceRange=='price1500_2000'){
            if(product.brand.toLowerCase()==brandName.toLowerCase() && (product.currentPrice>=1500 && product.currentPrice<=2000)){
                applyFilteredProducts=[...applyFilteredProducts,product];
            }
        }
        else{
            if(product.brand.toLowerCase()==brandName.toLowerCase() && product.currentPrice>=2000){
                applyFilteredProducts=[...applyFilteredProducts,product];
            }
        }
    })
    showProducts(applyFilteredProducts);
}
else if(brandName!="" && priceRange==""){
    applyFilteredProducts=[];
        products.filter(product=>{
        if(product.brand.toLowerCase()==brandName.toLowerCase()){
            applyFilteredProducts=[...applyFilteredProducts,product];
        }
    })
    showProducts(applyFilteredProducts);
}
else if(brandName=="" && priceRange!=""){
    applyFilteredProducts=[];
    products.filter(product=>{
    if(priceRange=='price500'){
        if(product.currentPrice<500){
            applyFilteredProducts=[...applyFilteredProducts,product];
        }
    }
    else if(priceRange=='price500_1000'){
        if(product.currentPrice>=500 && product.currentPrice<=1000){
            applyFilteredProducts=[...applyFilteredProducts,product];
        }
    }
    else if(priceRange=='price1000_1500'){
        if(product.currentPrice>=1000 && product.currentPrice<=1500){
            applyFilteredProducts=[...applyFilteredProducts,product];
       }
    }
    else if(priceRange=='price1500_2000'){
        if(product.currentPrice>=1500 && product.currentPrice<=2000){
            applyFilteredProducts=[...applyFilteredProducts,product];
        }
    }
    else{
        if(product.currentPrice>=2000){
            applyFilteredProducts=[...applyFilteredProducts,product];
        }
    }})
    showProducts(applyFilteredProducts);
}

if(applyFilteredProducts.length==0){
    document.write('<div style="text-align:center;margin-top:100px;color:red"><h1>No product Found</h1>');
    document.write('<a style="font-size:20px;" href="ProductList.html">Back to Product page</a>')
    document.write('</div>');
}
