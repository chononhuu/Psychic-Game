var wins = 0;
var losses = 0;
var attempts = 9;
var usedLetters = [];
var computerGuess = computerGuess;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];

function guess() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}

document.onkeyup = function(event) {
    var playerGuess = event.key;
    
    if (playerGuess === computerGuess) {
        wins++;
        attempts = 9;
        usedLetters = [];
    }
    guess();
    if (playerGuess !== computerGuess) {
        attempts--;
    }
    if (attempts == 0) {
        losses++;
        usedLetters = [];
        attempts = 9;
    }
    if (usedLetters.indexOf(playerGuess) >= 0) {

    }
    else {
        usedLetters.push(playerGuess);
        document.getElementById('playerGuess').innerHTML = usedLetters;
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('attempts').innerHTML = attempts;
    
    
}