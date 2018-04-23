let gifs = window.data.data;

let myGifDisplay = document.querySelector('.gifScreen');
console.log(myGifDisplay);

let myButton = document.querySelector('#gifButton');
console.log(myButton);


let usedGifs = [];


 myButton.addEventListener('click', function(){

 	

  let justOneRandomGif =  gifs[Math.floor(Math.random() * gifs.length +1)].embed_url;
  
     usedGifs.push(justOneRandomGif);
     
        for ( let = 0; i < )

 	myGifDisplay.innerHTML = `<iframe src="${ justOneRandomGif}" id='actualGif'></iframe>`

 });



