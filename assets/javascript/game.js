


/* <div id="game">
        <p>Press any key to get started!</p>
    </div>


    // create array of words
    var words = ["aladdin", "lion king", "mulan", "pocahontas", "the aristocats"];

    document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    var Wins = 0;
    var Losses = 0;


    // pick a random word
    var word = words[Math.floor(Math.random() * words.length)];


    // set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = word.length;

    // the game loop
    while (remainingLetters > 0) {
        // show progress
        alert(answerArray.join(" "));

        // get guess from the player
        var guess = prompt("Guess a letter, or click Cancel to stop playing.");
        if (guess === null) {
            // exit game loop 
            break;
        } else if (guess.length !== 1) {
            alert("please enter a single letter.");
        } else {
            // update the game state with guess
            for (var j= = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess; remainingLetters--;
                }
            }
        }

    }
    }

    // show the answer and congratulate the player
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word); */

