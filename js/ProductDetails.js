let productId=localStorage.getItem('id');
let productFullDetails=products[productId];


const imageShow= i =>{
    let parentContainer=document.getElementById('image-container');
    let image=document.createElement('img');
    image.className='large-product-image';
    image.src=productFullDetails.images[i];
    let replace=parentContainer.firstElementChild;
    parentContainer.replaceChild(image,replace);
}
const addCart=()=>{
    let id=productId;   
    localStorage.setItem('cart'+id,id);
    alert("Product added to the cart sucessfully",);
}