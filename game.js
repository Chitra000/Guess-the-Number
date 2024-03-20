let number = Math.floor(Math.random() * 100 + 1); // Generates a random number b/w 1 and 100
var chances = 10; // Initial vaulue of chances taken to guess a number
var para;

function play() {
  document.getElementById("count").innerHTML = chances;
  console.log(number);
  if (chances != 0) {
    var guess = document.getElementById("guess-input").value;
    if (guess > number) {
      para = document.getElementById("card-text");
      para.innerHTML = "Try smaller number.";
      chances--;
    } else if (guess < number) {
      para = document.getElementById("card-text");
      para.innerHTML = "Try greater number.";
      chances--;
    } else if (guess == number) {
      para = document.getElementById("card-text");
      para.innerHTML = "You Won :) \n CLick on PLAY to start again.";
      setTimeout(() => {
        document.location.reload();
      }, "5000");
    }
  } 
  else if (chances == 0) {
    para = document.getElementById("card-text");
    para.innerHTML = "You have lost your chances. Try again.";
    setTimeout(() => {
        document.location.reload();
      }, "3000");
  }
}
