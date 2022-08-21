var randomNumber;
var score;
function start(){
 randomNumber = Math.ceil(Math.random(1, 100) * 100);
console.log(randomNumber);
score = 100;
}

start();
function submit() {
    let guess = document.getElementById("ans").value;
    if (guess == randomNumber) {
        document.getElementById("result").innerHTML = "Game Ends and New Number Generated";
        end();
    } else if (guess > randomNumber) {
        document.getElementById("result").innerHTML = "Guess is greater than the random number";
        score = score - 1;
        document.getElementById("scoree").innerHTML = `${score}`;

    } else {
        document.getElementById("result").innerHTML = "Guess is less than the random number";
        score = score - 1;
        document.getElementById("scoree").innerHTML = `${score}`;
    }
}

function end() {
    alert(`Game Ends and Final Score is ${score}`);
    start();
    document.getElementById("scoree").innerHTML = ` `;
    document.getElementById("ans").value=" ";

}

function rules(){
    alert(`Rules\n1. Random Number Is Generated At the begining of the game\n2. You have to guess that random number\n3. In starting The score is 100 and deducted by 1 everytime when You Guess the wrong Answer.\n4. The game will end and new number will be generated once you guess the correct number.`)
}