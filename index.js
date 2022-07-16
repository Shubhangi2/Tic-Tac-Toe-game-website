let music = new Audio("ting.mp3")
let turn = "X";
gameover = false;

// onchange turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

// to check for game win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e=>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText  &&  boxtext[e[1]].innerText === boxtext[e[2]].innerText &&  boxtext[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " is won";
            gameover = true;
        }
    
      
    })

}

//game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(Element=>{
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})