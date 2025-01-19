console.log("Welcome to Tic Tac Toe"); //Welcome message
let music = new Audio("audio/music.mp3"); //music
let audioTurn = new Audio("audio/ting.mp3"); //audio on turn
let audioGameover = new Audio("audio/gameover.mp3"); //audio on gameover
let audioDraw = new Audio("audio/draw.mp3"); //audio on draw
let turn = "X"; //turn for X
let isGameover = false; //gameover is false initially

//Function to change the turn

const changeTurn = () => {
  //function to change turn
  return turn === "X" ? "O" : "X"; //if turn is X then change to O else change to X
};

let boxes = document.getElementsByClassName("box"); //to get all boxes

//Function to check for Win

const checkWin = () => {
  //function to check win
  let boxText = document.getElementsByClassName("boxText"); //to check innertext of boxes

  let wins = [
    //winning conditions(e[0].e[1],e[2])
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  // if(innertext at index1=innertext at index2 and innertext at index2=innertext at index3)

  wins.forEach((e) => {
    //for each win condition
    if (
      //if win condition is satisfied
      boxText[e[0]].innerText === boxText[e[1]].innerText && //if innertext at index1=innertext at index2
      boxText[e[1]].innerText === boxText[e[2]].innerText && //if innertext at index2=innertext at index3
      boxText[e[0]].innerText !== "" //if innertext is not empty
    ) {
      document.querySelector(".info").innerText = //display info
        boxText[e[0]].innerText + " Won"; //X won/O won
      audioGameover.play(); //win Audio
      // Change color of winning boxes
      boxText[e[0]].parentElement.style.backgroundColor = "red"; //change color of winning boxes
      boxText[e[1]].parentElement.style.backgroundColor = "red"; //change color of winning boxes
      boxText[e[2]].parentElement.style.backgroundColor = "red"; //change color of winning boxes

      //Alternative Method to change color of winning boxes
      /*  e.forEach(index => {
                boxText[index].parentElement.style.backgroundColor = "yellowred"; //change color of winning boxes;
            }); */

      isGameover = true; //game over if win condition is satisfied
      Array.from(boxes).forEach((element) => {
        element.style.pointerEvents = "none"; // disable further clicks on boxes
      });
      // Closing bracket for the outer Array.from(boxes).forEach function
      document
        .querySelector(".imageBox")
        .getElementsByTagName("img")[0].style.width = "200px"; //Win GIF
    }
  });
};

//Function to check for Draw
const checkDraw = () => {
  let boxText = document.getElementsByClassName("boxText"); //to check innertext of boxes
  let isDraw = true;
  Array.from(boxText).forEach((element) => {
    //for each box
    if (element.innerText === "") {
      //if innertext is empty
      isDraw = false; //if innertext is empty then draw is false
    } //if innertext is not empty then draw is true
  }); //if all boxes are filled then draw is true

  if (isDraw) {
    //if draw is true
    document.querySelector(".info").innerText = "It's a Draw"; //display info
    audioDraw.play(); //draw Audio
    isGameover = true; //game over if draw is true
  }
};

//Game Logic
music.play(); //music play
music.loop = true;

//Add onclick listner to all boxes
Array.from(boxes).forEach((element) => {
 //for each box
  let boxText = element.querySelector(".boxText"); //Invoking box text for change turn
  element.addEventListener("click", () => {
    //onclick event
    if (boxText.innerText === "") {
      //if innertext is empty
      boxText.innerText = turn; //change turn
      boxText.style.color = turn === "X" ? "white" : "black"; // Set color based on turn
      turn = changeTurn();
      audioTurn.play(); //audio on turn
      checkWin(); //check win on every turn
      checkDraw(); //check draw on every turn
      if (!isGameover) {
        //if game is not over
        document.getElementsByClassName("info")[0].innerText =
          "Turn For " + turn; //invoking info to show turn O/turn X
      }
    }
  });
});

//Add onclick listner to Reset Button

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText"); //to reset  all boxes
  Array.from(boxtexts).forEach((element) => {
    element.innerText = ""; // clear innertext
  });
  turn = "X";
  isGameover = false; //gameover is false
  document.getElementsByClassName("info")[0].innerText = "Turn For " + turn; //display turn
  document
    .querySelector(".imageBox") //Win GIF
    .getElementsByTagName("img")[0].style.width = "0px"; //Win GIF-0 on reset which was 200 on win
  Array.from(boxes).forEach((element) => {
    element.style.backgroundColor = ""; // remove win highlight color which was added after win
    element.style.pointerEvents = "auto"; // enable clicks on boxes after reset which were disabled after win
  });
});
