// console.log(productObject);
// console.log('before making the request');

// let myPromise = axios.get('https://www.redbullshopus.com/products.json');

// myPromise.then(function(myResponse){
//     console.log('recieved the response');
//     console.log(myResponse);
// })

let showCasing = document.querySelector('.showCase');
let redbullgallery =document.querySelector('.gallery');
let myPromise = axios.get('https://www.redbullshopus.com/products.json').then(function(myResponse){
    // console.log('recieved the response');
    console.log(myResponse.data.products);
    let specificProducts = myResponse.data.products[0].images[0].src;
    // console.log('one more check');
    let allOfTheProducts = myResponse.data.products;
    // showCasing.innerHTML = `<img src="${redBullHat}">`;


     for( let i = 0; i < allOfTheProducts.length; i++){
 
       // let OneProductImage = allOfTheProducts[i].images[0].src;
       // let NuNode = document.createElement('div');
       // let NuItem = document.createTextNode(NuNode.innerHTML =`<img src="${OneProductImage}">`);
       //  redbullgallery.appendChild(NuNode);


       

     };

});


// console.log('afer making the request');


// let redBullHat = myResponse.data.products[0].images[0].src;
// console.log(redBullHat);