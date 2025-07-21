const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const resetButton = document.querySelector('#reset')
const selectScore = document.querySelector("#selectWinningScore")

const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay")
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay")

let p1Score = 0;
let p2Score = 0;

let winnigScore = 3;

let isGameOver = false;

p1Button.addEventListener('click', function () {

    if (!isGameOver) {
        p1Score = p1Score + 1;

        if (p1Score === winnigScore) {
            isGameOver = true;
            p1ScoreDisplay.classList.add('winner')
            p2ScoreDisplay.classList.add('looser')
        }
        p1ScoreDisplay.textContent = p1Score;

    }

})

p2Button.addEventListener('click', function () {

    if (!isGameOver) {
        p2Score += 1;

        if (p2Score === winnigScore) {
            isGameOver = true;
            p2ScoreDisplay.classList.add('winner')
            p1ScoreDisplay.classList.add('looser')
        }
        p2ScoreDisplay.textContent = p2Score;
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
    p1ScoreDisplay.classList.remove('winner','looser')
    p2ScoreDisplay.classList.remove('winner','looser')


}

selectScore.addEventListener('change', function () {
    winnigScore = parseInt(this.value);
    reset();
    console.log(this.value)
})