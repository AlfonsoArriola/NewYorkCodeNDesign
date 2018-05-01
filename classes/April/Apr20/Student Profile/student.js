class student {
  constructor(fname,lname,scores){
     this.sFname = fname;
     this.sLname = lname;
     this.sScores = scores;
     this.stotal = 0;
     this.sTopScore = [];
     this.sAverage = 0;
     
    for(let i=0; i < scores.length; i++){
        this.stotal += scores[i];
        if(scores[i] > this.sTopScore){
          this.sTopScore = scores[i];
        }
    }
     
  this.sAverage = this.stotal/scores.length;
  }
  
  getFullName(){
    return this.sFname + " " + this.sLname;
  }

  addScore(i){
      // return this.sScores.push(i);
        this.sScores = this.sScores.push(i);
        return this.sScores;
  }
  
  removeScore(i){
    this.foundIndex = this.sScores.indexOf(i);
    return this.sScores.splice(this.foundIndex,i);
    
    // this.foundIndex = this.sScores.indexOf(i);
     
    // this.sScores = this.sScores.splice(this.foundIndex,i);
     
    // return this.sScores;
    
  }
 }


// let myStudent = new student('Allen', 'Iverson', [88,77,100,66,93]);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let getFirstName = document.querySelector('#fname');
let getLastName = document.querySelector('#lname');
let  showFullName = document.querySelector('')

    showFullName.addEvemtListener('keyup', function(){

    })






