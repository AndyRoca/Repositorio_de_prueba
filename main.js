//enlazando los botones de Js con Html
const btnPushJs = document.getElementById("btnPush");
const btnUnshift = document.getElementById("btnUnshift");
const btnInsertAt = document.getElementById("btnInsertAt");
const btnPop = document.getElementById("btnPop");
const btnshift = document.getElementById("btnshift");
const btnRemoveAt = document.getElementById("btnRemoveAt");

// Array principal
var mainarray = [];

//Creacion del contadores Insert at
var myNumberInput = document.getElementById("myNumberInput");
myNumberInput.valueAsNumber = 0;
myNumberInput.min = 0;

myNumberInput.addEventListener("input", function() {
    const value = myNumberInput.valueAsNumber;
    
    if (value >= (mainarray.length + 1)) {
        myNumberInput.classList.add("invalid");
        myNumberInput.value = "No puede ser negativo";
    } else {
        myNumberInput.classList.remove("invalid");
    };
});


//Creacion del contadores Remove at
var myNumberInput2 = document.getElementById("myNumberInput2");
myNumberInput2.valueAsNumber = 0;
myNumberInput2.min = 0;

myNumberInput2.addEventListener("input", function() {
    const value = myNumberInput2.valueAsNumber;
    
    if (value >= (mainarray.length + 1)) {
        myNumberInput2.classList.add("invalid");
        myNumberInput2.value = "No puede ser negativo";
    } else {
        myNumberInput2.classList.remove("invalid");
    };
});

//Creacion de las Funciones de Add Item
//Push
btnPushJs.onclick = () => {
    const comida = ["🍕", "🍔", "🍟", "🌭", "🍿", "🥓", "🥚", "🍳", "🧇", "🥞"]; 
    let indiceAleatorio = Math.floor(Math.random() * comida.length);
    mainarray.push(comida[indiceAleatorio]);
    document.getElementById('ids').innerHTML = mainarray;
    console.log(mainarray);
};

//Unshift
btnUnshift.onclick = () => {
    const flores = ["💐", "🌸", "🏵", "🌹", "🌺", "🌻", "🌼", "🌷", "🌾", "🍁"]; 
    let indiceAleatorio = Math.floor(Math.random() * flores.length);
    mainarray.unshift(flores[indiceAleatorio]);
    document.getElementById('ids').innerHTML = mainarray;
    console.log(mainarray);
};

//InsertAt
console.log(myNumberInput)

btnInsertAt.onclick = () => {
    const cosas = ["🎈", "🎆", "🎎", "🎞", "👓", "🥼", "🎠", "🎃", "🧶", "🎢"]; 
    let indiceAleatorio = Math.floor(Math.random() * cosas.length);
    mainarray.splice(myNumberInput.valueAsNumber, 0, cosas[indiceAleatorio]);
    document.getElementById('ids').innerHTML = mainarray;
    console.log(mainarray);
};


//Creacion de las Funciones de Remove Item
//Pop
btnPop.onclick = () => {
    mainarray.pop();
    document.getElementById('ids').innerHTML = mainarray;
    console.log(mainarray);
};

//Shift
btnshift.onclick = () => {
    mainarray.shift();
    document.getElementById('ids').innerHTML = mainarray;
    console.log(mainarray);
};

//Remove At
btnRemoveAt.onclick = () => {
    mainarray.splice([myNumberInput2.valueAsNumber], ([myNumberInput2.valueAsNumber]-1));
    document.getElementById('ids').innerHTML = mainarray;
    console.log(mainarray);
};