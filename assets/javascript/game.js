// word list
    var Words = [
        "aladdin",
        "the lion king",
        "mulan",
        "pocahontas",
        "the aristocats",
    ];
    
    // max # of tries player has
    const maxTries = 10;

    //stores letters player has guess
    var guessedLetters = [];
    
    //index of current word in array
    var currentWord;

    //this is the word we actually build to match current word
    var guessingWord = [];

    //how many tries player has left
    var remainingGuesses = 0;

    //game started alert
    var gameStarted = false;

    //alert for "press any key to get started"
    var hasFinished = false;
    
    // # of wins by player
    var Wins = 0;

    
    document.onkeydown = function(event) {
        // if finished a game, one keystroke and reset.
        if(hasFinished) {
            resetGame();
            hasFinished = false;
        } else {
            // check to make sure a-z was pressed.
            if(event.keyCode >= 65 && event.keyCode <= 90) {
                makeGuess(event.key.toLowerCase());
            }
        }
    }

    //reset game-level variables
    function resetGame() {
        remainingGuesses = maxTries;
        gameStarted = false;

    // math.floor to round the random # down to the nearest whole.
        currentWord = Math.floor(Math.random() * (Words.length));

    // clear arrays
        guessedLetters = [];
        guessingWord = [];
        
    // make sure hangman is cleared
      //   document.getElementById("hangmanImage").src = "";

    //build guessing word + clear it out
        for (var i = 0; i < Words[currentWord].length; i++) {
            guessingWord.push("_");
        }
    // hide game over + win images/text
        document.getElementById("#presskeyTryAgain").style.cssText = "display: none";
        document.getElementById("#gameoverImage").style.cssText = "display: none";
        document.getElementById("#winnerImage").style.cssText = "display: none";

    }
    
    // show display
 
    
    function updateDisplay() {
        document.getElementById("Wins").innerHTML = Wins;
        document.getElementById("#currentWord").innerHTML = "";
        for (var i = 0; i < guessingWord.length; i++) {
            document.getElementById("#currentWord").innerHTML += guessingWord[i];
        }
        document.getElementById("#remainingGuesses").innerHTML = reaminingGuesses;
        document.getElementById("#guessedLetters").innerHTML = guessedLetters;
        if (remainingGuesses <= 0) {
            document.getElementById("#gameoverImage").style.cssText = "display: block";
            document.getElementById("#presskeyTryAgain").style.cssText = "display: block";
            hasFinished = true;
        }
    }
    


    function makeGuess(letter) {
        if (remainingGuesses > 0) {
            if (!gameStarted) {
                gameStarted = true;
            }
// make sure we didn't use specific letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
        }
    }

// function takes a letter and finds all instance of 
// appearancce in the string and replaces them in the guess word.
    function evaluateGuess(letter) {
    // array to store positions of letters in string
    var positions = [];

    // loop through word finding all instances of guess letter, store indicies in array
    for (var i = 0; i < Words[currentWord].length; i++) {
        if(Words[currentWord][i] === letter) {
            positions.push(i);
        }
    } 
// loop through all indicies and replace the '_' with a letter.
    for (var i = 0; i <positions.length; i++) {
        guessingWord[positions[i]] = letter;
    }
    }
    
    function checkWin() {
        if(guessingWord.indexOf("_") === - 1) {
            document.getElementById("#youwin-image").style.cssText = "display: block";
            document.getElementById("presskeyTryAgain").style.cssText = "display: block";
            Wins++;
            hasFinished = true;
        }
    }



