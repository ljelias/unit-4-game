let wins = 0;
let losses = 0;
let total = 0;
let message = "";

// CHOOSE random number
let randomNumber = Math.ceil(Math.random() * 101) + 19; 
console.log(randomNumber);
document.getElementById("randomnumber").innerHTML = randomNumber;

let gemNum1 = Math.ceil(Math.random() * 12); 
console.log(gemNum1);

let gemNum2 = Math.ceil(Math.random() * 12); 
console.log(gemNum2);

let gemNum3 = Math.ceil(Math.random() * 12); 
console.log(gemNum3);

let gemNum4 = Math.ceil(Math.random() * 12); 
console.log(gemNum4);


  $("#gem1").on("click", function() { 
      total += gemNum1;
      document.getElementById("totalscore").innerHTML = total;
      winOrLose ();
  });

  $("#gem2").on("click", function() { 
      total += gemNum2;
      document.getElementById("totalscore").innerHTML = total;
      winOrLose ();
  });

  $("#gem3").on("click", function() { 
      total += gemNum3;
      document.getElementById("totalscore").innerHTML = total;
      winOrLose ();
  });

  $("#gem4").on("click", function() { 
      total += gemNum4;
      document.getElementById("totalscore").innerHTML = total;
      winOrLose ();
  });


function startGame () {
    randomNumber = Math.ceil(Math.random() * 101) + 19;
    gemNum1 = Math.ceil(Math.random() * 12);
    gemNum2 = Math.ceil(Math.random() * 12);
    gemNum3 = Math.ceil(Math.random() * 12);
    gemNum4 = Math.ceil(Math.random() * 12);    
    total = 0;
    document.getElementById("totalscore").innerHTML = total;
    document.getElementById("randomnumber").innerHTML = randomNumber;
}

function winOrLose () {
  if (total === randomNumber) { 
      wins++;
      message = "YOU WIN!";
      document.getElementById("wintotal").innerHTML = wins;
      document.getElementById("msg").innerHTML = message;
      startGame ();
  }
  else if (total > randomNumber) {
      losses++;
      message = "YOU LOSE!";
      document.getElementById("losstotal").innerHTML = losses;
      document.getElementById("msg").innerHTML = message;
      startGame ();
  }
}
