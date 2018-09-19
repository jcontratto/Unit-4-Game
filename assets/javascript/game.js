$(document).ready(function() {

    /* random number between 19 and 120 */
    var goalScore = Math.floor((Math.random() * 101) + 19);
         $("#NumberReach").text(goalScore);
    
    /* random number for each crystal between 1 and 12 */
    var crystalVal1 = Math.floor(Math.random()*11+1)
    var crystalVal2 = Math.floor(Math.random()*11+1)
    var crystalVal3 = Math.floor(Math.random()*11+1)
    var crystalVal4 = Math.floor(Math.random()*11+1)

    var userValue = 0;
    var totWins = 0;
    var totLoss = 0;

    $("#gamesWon").text(totWins);
    $("#gamesLost").text(totLoss);
    $("#NumberTotal").text(userValue);
        
    /* reset variables for a new game */
    function newGame() {
        goalScore = Math.floor((Math.random() * 102) + 19);
        $("#NumberReach").text(goalScore);
            crystalVal1 = Math.floor(Math.random()*11+1);
            crystalVal2 = Math.floor(Math.random()*11+1);
            crystalVal3 = Math.floor(Math.random()*11+1);
            crystalVal4 = Math.floor(Math.random()*11+1);
            userAccum = 0;
        $("#NumberTotal").text(userValue);
    };

    function gameWon() {
        $("#gameStat").text("Smarty Pants!");
        totWins++
        $("#gamesWon").text(totWins);
        newGame();
    };

    function gameLost() {
        $("#gameStat").text("Better Luck Next Time!");
        totLoss++
        $("#gamesLost").text(totLoss);
        newGame();
    };

    $("#buttonBlue").on("click", function() {
        userValue = userValue + crystalVal1;
        $("#NumberTotal").text(userValue);
        if (userValue === goalScore) {
            gameWon();
        }
        else if (userValue > goalScore) {
            gameLost();
        }
        
    });

    $("#buttonRed").on("click", function() {
        userValue = userValue + crystalVal2;
        $("#NumberTotal").text(userValue);
        if (userValue === goalScore) {
            gameWon();
        }
        else if (userValue > goalScore) {
            gameLost();
        }
    });

    $("#buttonYellow").on("click", function() {
        userValue = userValue + crystalVal3;
        $("#NumberTotal").text(userValue);
        if (userValue === goalScore) {
            gameWon();
        }
        else if (userValue > goalScore) {
            gameLost();
        }
    });

    $("#buttonGreen").on("click", function() {
        userValue = userValue + crystalVal4;
        $("#NumberTotal").text(userValue);
        if (userValue === goalScore) {
            gameWon();
        }
        else if (userValue > goalScore) {
            gameLost();
        }
    });
    //need to have reset after you win or lose, keeps adding onto to same 
});
