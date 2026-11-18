//hol elemente als liste her und packe sie in eine variable
const becher = document.querySelectorAll(".becher");
const gif = document.getElementById("katze");
const knopf = document.getElementById("knopf");
let pressed = false
const yippie = new Audio("sounds/yay-mit-glitzer.mp3");

//lasse eine zahl zwischen 0 und 4 generieren und gib sie in der konsole aus
let dieDieDieBecherRandomisiert = Math.floor(Math.random() * 5 );
console.log(dieDieDieBecherRandomisiert);

//geht die Liste an bechern durch
becher.forEach( (b) => {
    //sorgt dafür, dass ein Klick auf den becher verarbeitet wird
    b.addEventListener("click", () => {
        handleClick(b)
    })
})
//überprüft ob der richtige becher gedrückt wurde
function handleClick(einBecher) {
    //holt den gewinnbecher der mit der random zahl ausgelost wurde
    const gewinnGewinnGewinn = becher[dieDieDieBecherRandomisiert];

    if(!pressed){
        if(gewinnGewinnGewinn === einBecher) {
            gif.play();
            //gewinnbecher bild wird mit redo ersetzt
            einBecher.src = "img/rene-redo-2.webp";
            yippie.play();
        } else {
            einBecher.src = "img/rex.webp"
            playRandomFail()
        }
        pressed = true
    }
}

knopf.addEventListener("click", () => {
    becher.forEach( (b) => {
        b.src = "img/becher.jpg";
    })
    dieDieDieBecherRandomisiert = Math.floor(Math.random() * 5 );
    pressed = false
})

const sounds = [
    "sounds/fail/fail1.mp3",
    "sounds/fail/fail2.mp3",
    "sounds/fail/fail3.mp3",
    "sounds/fail/fail4.mp3",
    "sounds/fail/fail5.mp3",
    "sounds/fail/fail6.mp3",
    "sounds/fail/fail7.mp3",
    "sounds/fail/fail8.mp3"
];

function playRandomFail() {
    // Generate random index between 0 and 7
    const randomIndex = Math.floor(Math.random() * sounds.length);

    // Create new Audio object and play
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
}