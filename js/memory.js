let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/


let arrayComparison = [];

document.body.onload = startGame();

// agganciare gli elementi html (la classe find, l'id modal, la classe timer)
var timer = document.getElementsByClassName("timer");
var modal= document.getElementById("modal");

// questa una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
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
// una funzione playGame() che fa partire il gioco startGame()
function startGame(){
    var arrayShuffle = shuffle(arrayAnimali);
    var griglia = document.getElementById("griglia");
    arrayAnimali.forEach((el)=>{
        griglia.innerHTML += `<div class="icon"></div>`;
        document.getElementsByClassName("icon").forEach("click", ()=>{
            displayIcon();
            alert("Hello!")
        })
    })
}

// la funzione startGame pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, 
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la classe icon e l'elemento dell'array in base all'indice progressivo
// infine chiama la funzione timer 
// e associa a tutti gli elementi (div) a cui ho appena aggiungo la classe icon l'evento click e le due funzioni definite sotto
// che mi servono una a mostrare le icone (displayIcon) e una a lanciare la finestra modale openModal()



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

// una funzione openModal() che viene mostrata alla fine quando sono tutte le risposte esatte

// una funzione closeModal() che nasconde la modale alla fine e riavvia il gioco

// una funzione startTimer() che calcola il tempo
