
let love = [];

$(document).ready(function() {
    console.log('oh');


 // $.ajax({
 // 	type: 'GET',
 //    url: 'https://pokeapi.co/api/v2/pokemon/448/',
 //        success: function(data){
 // 		console.log('oh!');
 // 		console.log('success', data);
 // 		console.log('yea!');

 // 	}
 // });





 $.ajax({
 	type: 'GET',
        url:'https://pokeapi.co/api/v2/pokemon/696/',
        success: function(data){
 		console.log('oh!');
 		// console.log('success', data);
 		console.log(data);
 		console.log('yea!');

 		// let love = data;	
 		// console.log(love);
 		love = data;

	}
 });







    // let myDiv = $('.love');
    //  console.log(myDiv.length);
    //  console.log(myDiv[0]);
    //  myDiv.css({background:'black', color:"red"});
    //  myDiv.text('Gravy');
    //  myDiv.addClass('double dutch');



    //  console.log(myDiv);
    //  console.log(myDiv.html())


     // myDiv.css("display", "none");
     // myDiv.addClass('myClass');
     // myDiv.append();

});