let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];

var griglia = document.getElementById("griglia");
var timer = document.getElementById("timer");
var modal= document.getElementById("modal");
let iconsFind = document.getElementsByClassName("find");

let arrayComparison = [];

document.body.onload = startGame();

function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
function startGame(){
    shuffle(arrayAnimali);
    let card ="" ;
    arrayAnimali.forEach(element => {
        card += `<div id="target"><div class="icon">${element}</div></div>`; 
    });
    document.getElementById("griglia").innerHTML=card;
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", displayIcon);
        icons[i].addEventListener("click", openModal);
    }
    time();
}


function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];


    //mette/toglie la classe show
    this.classList.toggle("show");
    //aggiunge l'oggetto su cui ha cliccato all'array del confronto
    arrayComparison.push(this);

    var len = arrayComparison.length;
    //se nel confronto ci sono due elementi
    if (len === 2) {
        //se sono uguali aggiunge la classe find
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

function openModal(){
    if (iconsFind.length == 24) {
        $("#modal").css("display", "block");
        document.getElementById("tempoTrascorso").innerHTML = document.getElementById("timer").innerHTML;
        
    }
}

function time(){
    var sec=0;
    var min=0;
    var myInt = "";
    myInt = setInterval(()=>{
        sec++;
        timer.innerHTML = `Tempo: ${min} min ${sec} sec`;
        if (sec == 60) {
            sec = 0;
            min++;
            
        }
    },1000)
}

   

function playAgain(){
    $("#modal").css("display", "none");
    startGame();

}
// federico.deambrosis@gmail.com


