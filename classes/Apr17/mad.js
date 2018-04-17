let blanks = document.querySelectorAll(".blank");

let madWeather = document.querySelector("#weather");
let madSong = document.querySelector("#song");
let madPlayer = document.querySelector("#player");
let madNoun = document.querySelector("#noun");


    // function filled(){
    // 	console.log("good work!")
    // 	document.getElementById('madForm').submit();
    // }


     blanks.addEventListener('onclick', function(){
    	  console.log("Keep going!!!!")
            madWeather.innerHTML = blanks.value;
    });