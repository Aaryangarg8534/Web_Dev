console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//function to change turn
const change = () => {
  return turn === "X" ? "0" : "X";
};

//function to check win
const checkwin = () => {};

//game logic
let boxes = document.getElementByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = document.querySelector(".boxtext");
});
