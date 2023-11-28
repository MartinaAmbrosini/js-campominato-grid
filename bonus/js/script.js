// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// prendiamo bottone tramite id 
const playButton = document.getElementById("play");

// selezione dell'elemento contenitore 
let gridElement = document.getElementById("grid");

playButton.addEventListener("click",

    // comparsa griglia al click del playbutton
        
    function(){

        const diff = document.getElementById("text-diff").value;

        if (diff === "1") {
            // creo ciclo per griglia
            for (let i = 1; i <= 100; i++) {
                const myElement = createMyelement("div", "cell");

                gridElement.append(myElement);
                myElement.append(i);

                // cambio colore dei quadrati al click
                myElement.addEventListener("click",
                    function(){
                        myElement.classList.add("azure");
                        console.log(i);
                    }
                );
            }   
        } else if (diff === "2") {
            for (let i = 1; i <= 81; i++) {
                const myElement = createMyelement("div", "cell-medium");

                gridElement.append(myElement);
                myElement.append(i);

                // cambio colore dei quadrati al click
                myElement.addEventListener("click",
                    function(){
                        myElement.classList.add("azure");
                        console.log(i);
                    }
                );
            }   
        } else {
            for (let i = 1; i <= 49; i++) {
                const myElement = createMyelement("div", "cell-hard");

                gridElement.append(myElement);
                myElement.append(i);

                // cambio colore dei quadrati al click
                myElement.addEventListener("click",
                    function(){
                        myElement.classList.add("azure");
                        console.log(i);
                    }
                );
            }   
        }
    }        
);

// Definizione funzioni

function createMyelement(tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}