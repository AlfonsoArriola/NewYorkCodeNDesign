// alert('kiya!');

let addUpButton = document.querySelector('.plusButton');
let subtractDownButton = document.querySelector('.minusButton');
let numberDisplay = document.querySelector('.incrementor');


     
    
  addUpButton.addEventListener('click', function(){
  	  console.log('check 1');
        numberDisplay.innerText  = Numbers.oneMoreNumber();

  });


subtractDownButton.addEventListener('click', function(){
	console.log('check 2');
	    numberDisplay.innerText = Numbers.oneLessNumber();
});




class Numbers{
	constructor(myNumber){
       this.number = myNumber;
	}

	oneMoreNumber(){
        myNumber ++;
	}


	oneLessNumber(){
		myNumber --;

	}
}