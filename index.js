console.log("Tic Tac Toe Game");
let music = new Audio("ting.mp3");
let audioTurn = new Audio("turn.wav");
let gameOver = new Audio("gameOver.wav");
let turn = "X";
let isgameOver = false;


//  Function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X";

}
// Function to check a win
const checkWin = () => {
    let boxInfo = document.getElementsByClassName('boxInfo');
    let wins = [
        [0, 1, 2, 4, 4, 0],
        [3, 4, 5, 4, 13, 0],
        [6, 7, 8, 4, 22, 0],
        [0, 3, 6, -5, 13, 90],
        [1, 4, 7, 4, 13, 90],
        [2, 5, 8, 13, 13, 90],
        [0, 4, 8, 3, 12, 48],
        [2, 4, 6, 5, 13, 317],
    ]
    wins.forEach(e => {
        if ((boxInfo[e[0]].innerText === boxInfo[e[1]].innerText) && (boxInfo[e[2]].innerText === boxInfo[e[1]].innerText) && (boxInfo[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxInfo[e[0]].innerText + "won"
            isgameOver = true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "12vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = '20vw';


            gameOver.play();

        }

    })
}
// game logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(elements => {
    let boxInfo = elements.querySelector('.boxInfo');
    elements.addEventListener('click', () => {
        if (boxInfo.innerText === '') {
            boxInfo.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameOver) {
                document.getElementsByClassName('info')[0].innerText = "turn for" + turn
            }
        }
    })

});

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    // document.getElementsByClassName('boxInfo')[0].style.display ='none';
    let boxInfo = document.querySelectorAll('.boxInfo');
    Array.from(boxInfo).forEach(elements => {
        elements.innerText = "";
    });
    turn = 'X';
    isgameOver = false;
    document.getElementsByClassName('info')[0].innerText = "turn for" + turn
    document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0vw';
    music.play();
});

