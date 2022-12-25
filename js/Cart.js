let cartArray=[];
for(let x in localStorage){
    if(x.startsWith('cart')){
        cartArray=[...cartArray,localStorage.getItem(x)];
    }
}
let cartProduct=[];
for(let i=0;i<cartArray.length;i++){
    cartProduct=[...cartProduct,products[i]];
}

let cartContainer=document.getElementById('cart-container');

if(cartProduct.length>=1)
{
    let finalPrice=0,discount=0,items=0,totalPrice=0;

    for(let i=0;i<cartProduct.length;i++)
    {

        let percentageOff=(cartProduct[i].initialPrice-cartProduct[i].currentPrice)*100/cartProduct[i].initialPrice;
        items++;
        
        totalPrice+=cartProduct[i].initialPrice;
        finalPrice+=cartProduct[i].currentPrice;
        discount=totalPrice-finalPrice;

        let productDiv=document.createElement('div');
        productDiv.className='product';

        let productImage=document.createElement('img');
        productImage.className='product-image';
        productImage.alt="Image Not available";
        productImage.src=cartProduct[i].images[0];

        let aboutProductDiv=document.createElement('div');
        aboutProductDiv.className='about-product';

        let p1=document.createElement('p');
        p1.innerHTML=cartProduct[i].name;

        let p2=document.createElement('p');
        p2.innerHTML='<b class="price-text">&#x20b9;'+cartProduct[i].currentPrice+'</b>&nbsp;&nbsp;<del class="del-price-text">&#x20b9;'+cartProduct[i].initialPrice+'</del>&nbsp;&nbsp;<b class="green-text">'+Math.round(percentageOff)+'% off</b>';

        let removeButton=document.createElement('button');
        removeButton.className='remove';
        removeButton.textContent='REMOVE';

        aboutProductDiv.appendChild(p1);
        aboutProductDiv.appendChild(p2);
        aboutProductDiv.appendChild(removeButton);

        productDiv.append(productImage);
        productDiv.appendChild(aboutProductDiv);
        
        cartContainer.append(productDiv);

        removeButton.addEventListener('click',function(){
            localStorage.removeItem('cart'+cartArray[i]);
            location.reload();
        })
    }

    let priceDiv=document.createElement('div');
    priceDiv.className='price-div';

    let p=document.createElement('p');
    p.textContent='PRICE DETAILS';

    let hr=document.createElement('hr');

    let table=document.createElement('table');

    let tr1=document.createElement('tr');
    tr1.innerHTML='<td style="width:200px;">Price ('+items+' items)</td><td>&#x20b9;'+totalPrice+'</td>';
    let tr2=document.createElement('tr');
    tr2.innerHTML='<td>Discount</td><td style="color:green">-&#x20b9;'+discount+'</td>';
    let tr3=document.createElement('tr');
    tr3.innerHTML='<td>Delivery Charges</td><td>Free</td>';
    let tr4=document.createElement('tr');
    tr4.innerHTML='<td><b>Total Amount</b></td><td><b>&#x20b9;'+finalPrice+'</b></td>';

    priceDiv.appendChild(p);
    priceDiv.appendChild(hr);
    priceDiv.appendChild(table);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);

    document.body.appendChild(priceDiv);
    

    let payButton=document.createElement('button');
    payButton.className='button';
    payButton.textContent='PAY NOW';

    document.body.appendChild(payButton);
}
else
{
    document.write('<div class="empty-cart">')
    document.write("<h1>Cart is Empty</h1>")
    document.write('<a href="ProductList.html"><button class="button">Shop Now</button></a>')
    document.write('</div>');
}         