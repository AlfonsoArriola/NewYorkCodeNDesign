console.log('Before making the request');

let dateGoeshere = document.querySelector('#date');
let signGoeshere = document.querySelector('#sign');
let horoscopeGoeshere = document.querySelector('#horoscope');



let sign = prompt("Hey.  What's your sign.");

           if(sign.toLowerCase() == "leo"){

               axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/leo').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

               });

            } else if (sign.toLowerCase() == "cancer"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/cancer').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "aries"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/aries').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "taurus"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/taurus').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "gemini"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/gemini').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "vigro"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/vigro').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "libra"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/libra').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "scorpio"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/scorpio').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "sagittarius"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/sagittarius').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "aquarius"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/aquarius').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } else if (sign.toLowerCase() == "pisces"){
            	axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/pisces').then(function(myReponse){

					     dateGoeshere.innerText = myReponse.data.date;
					     signGoeshere.innerText = myReponse.data.sign;
					     horoscopeGoeshere.innerText = myReponse.data.horoscope; 

            });
            } 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




    

       

         






// axios.get('https://node-horoscopes.herokuapp.com/api/horoscopes/today/leo').then(function(myReponse){

// 	console.log('recieved the reponse');
// 	console.log(myReponse.data);
// 	let dateFromSite = myReponse.data.date;
// 	let signFromSite = myReponse.data.sign;
// 	let horoscopeFromSite = myReponse.data.horoscope;


// let Button = document.querySelector('.myButton');
// Button.addEventListener('click', function(){
// 	  console.log('click, click!');
//      dateGoeshere.innerText = dateFromSite;
//      signGoeshere.innerText = signFromSite;
//      horoscopeGoeshere.innerText = horoscopeFromSite;    

// });

// });
