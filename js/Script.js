function showProducts(products){
 
    let container=document.getElementById('product-container');

    for(let i=0;i<products.length;i++){
    let a=document.createElement('a');
    a.style.cssText="color: black;text-decoration:none;";
    a.href='ProductDetails.html';

    let span=document.createElement('span');
    span.className='box';

    let image=document.createElement('img');
    image.className='product-image';
    image.src=products[i].images[0];

    let p1=document.createElement('p');
    p1.style.cssText="color: rgba(0, 0, 0, 0.7);font-size: 20px;";
    p1.innerHTML=products[i].brand;

    let p2=document.createElement('p');
    p2.style.cssText="font-weight: 600";
    p2.innerHTML=products[i].name;

    let p3=document.createElement('p');
    p3.innerHTML='<del>&#x20b9;'+products[i].initialPrice+'</del>&nbsp;&nbsp;&#x20b9;<b>'+products[i].currentPrice+'</b>';

    let ratingSpan=document.createElement('span');
    ratingSpan.className='ratings';
    ratingSpan.innerHTML='<span>&#9733;</span>'+products[i].rating;

    let noOfRatingSpan=document.createElement('span');
    noOfRatingSpan.style.cssText="margin-left: 5px;";
    noOfRatingSpan.innerHTML='('+products[i].totalNoOfRating+')';
    span.appendChild(image);
    span.appendChild(p1);
    span.appendChild(p2);
    span.appendChild(p3);
    span.appendChild(ratingSpan);
    span.appendChild(noOfRatingSpan);
    a.appendChild(span);
    a.addEventListener('click',function(){
        localStorage.setItem('id',i);
    });
    container.appendChild(a);
    }
}