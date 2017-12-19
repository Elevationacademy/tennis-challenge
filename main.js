//write your code here to make the tests pass

function TennisGame(player1 , player2) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.player1 = player1;
    this.player2 = player2;

    const TENNIS_SCORE_TRANSLATOR = ["Love","Fifteen","Thirty","Forty"];

    this.playerOneScores = function () {
        this.playerOneScore++

    };

    this.playerTwoScores = function () {
        this.playerTwoScore++;

    };

    this.isDeuce = function () {
        return this.playerOneScore === this.playerTwoScore && this.playerOneScore>=3 ;

    };

    this.playerWithHighestScore = function () {
        return (this.playerOneScore > this.playerTwoScore) ? this.player1 : this.player2;

    };

    this.hasWinner = function () {
        return (Math.abs(this.playerTwoScore - this.playerOneScore) >= 2) &&
            (Math.max(this.playerTwoScore, this.playerOneScore)>3)

    };
    this.hasAdvantage = function () {
        return (Math.abs(this.playerTwoScore - this.playerOneScore) === 1) &&
            (Math.max(this.playerTwoScore, this.playerOneScore)>3)
    };
    this.translateScore = function (score) {
        return TENNIS_SCORE_TRANSLATOR[score];
    };

    this.getScore = function () {
        if (this.hasWinner()) {
            return this.playerWithHighestScore() + " wins";
        }

        if (this.isDeuce()) {
            return "Deuce";
        }

        if (this.hasAdvantage()) {
            return "Advantage " + this.playerWithHighestScore();
        }

        if (this.playerOneScore === this.playerTwoScore) {
            return TENNIS_SCORE_TRANSLATOR[this.playerOneScore] + " all"
        }

        return TENNIS_SCORE_TRANSLATOR[this.playerOneScore] + ", " + TENNIS_SCORE_TRANSLATOR[this.playerTwoScore]
    };



}
