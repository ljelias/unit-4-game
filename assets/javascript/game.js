
  let wins = 0;
  let losses = 0;
  let total = 0;
  let message = "";

// CHOOSE random number
  let randomNumber = Math.ceil(Math.random() * 120); 
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


if (total < randomNumber) {
  do  {
    $(".gem").on("click", function () {
        total = total + value;
    })
}
while (total < randomNumber);
}
else if (total >= randomNumber) {
     winOrLose();
}

  function winOrLose () {
    if (total === randomNumber) { 
        wins++;
        message = "YOU WIN!";
        document.getElementById("wintotal").innerHTML = wins;
        document.getElementById("msg").innerHTML = message;

    } else if (total > randomNumber) {
        losses++;
        message = "YOU LOSE!";
        document.getElementById("losstotal").innerHTML = losses;
        document.getElementById("msg").innerHTML = message;
    }
  }
