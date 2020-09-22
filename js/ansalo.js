//codigo para los diferentes modos
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

});

const btnSwitch2 = document.querySelector('#switch2');

btnSwitch2.addEventListener('click', () => {
    document.body.classList.toggle('retro');
    btnSwitch2.classList.toggle('active');
});


//obtenemos las letras y los numeros por su id
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

//obtenemos por el id
let a1 = document.getElementById("a1");
let b2 = document.getElementById("b2");
let c3 = document.getElementById("c3");
let d4 = document.getElementById("d4");
let e5 = document.getElementById("e5");
let f6 = document.getElementById("f6");
let g7 = document.getElementById("g7");
let h8 = document.getElementById("h8");
let i9 = document.getElementById("i9");
let j0 = document.getElementById("j0");
let clean = document.getElementById("clean");


// se crean contadores para ir guardando el valor en el que se va
let letraCont = "";
let numbCont = "";

//funciones para cada uno de los botones
function botonA1() {
    if (letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "1";
        numbCont = "1";
    } else { if (letraCont == "") {
        letras.innerHTML = "A";
        letraCont = "A";
    } else {
        swal("YA ESTA LA A");
    }
    }
}

function botonB2() {
    if (numbCont == "1" && letraCont == "ABCDEFGHIJ" ) {
        numeros.innerHTML = "12";
        numbCont = "12";
    } else { if (letraCont == "A") {
        letras.innerHTML = "AB";
        letraCont = "AB";
    } else if(numbCont !== "1" && letraCont !== "ABCDEFGHIJ"){
        swal("¡FALTAN LETRAS!");
    } else if(letraCont !== "A"){
        swal("¡FALTAN NUMEROS!");
    }
    }
}

function botonC3() {
    if (numbCont =="12" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "123";
        numbCont = "123";
    } else {if (letraCont == "AB") {
        letras.innerHTML = "ABC";
        letraCont = "ABC";
    } else if(numbCont !=="12" && letraCont !== "ABCDEFGHIJ"){
        swal("¡FALTAN LETRAS!");
    } else if(letraCont !== "AB"){
        swal("¡FALTAN NUMEROS!")
    }
    } 
}

function botonD4() {
    if (numbCont == "123" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "1234";
        numbCont = "1234";
    } else {
        if (letraCont == "ABC") {
        letras.innerHTML = "ABCD";
        letraCont = "ABCD";
    } else if(numbCont !== "123" && letraCont !== "ABCDEFGHIJ"){
        swal("!FALTAN LETRAS¡");
    } else if(letraCont !== "ABC"){
        swal("¡FALTAN NUMEROS!")
    }
    }    
}


function botonE5() {
    if (numbCont == "1234" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "12345";
        numbCont = "12345";
    } else {
        if (letraCont == "ABCD") {
        letras.innerHTML = "ABCDE";
        letraCont = "ABCDE";
    } else if(numbCont !== "1234" && letraCont !== "ABCDEFGHIJ") {
        swal("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCD") {
        swal("¡FALTAN NUMEROS!")
    }
    }
}

function botonF6() {
    if (numbCont == "12345" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "123456";
        numbCont = "123456";
    } else {
        if (letraCont == "ABCDE") {
        letras.innerHTML = "ABCDEF";
        letraCont = "ABCDEF";
    } else if (numbCont !== "12345" && letraCont !== "ABCDEFGHIJ") {
        swal("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDE") {
        swal("¡FALTAN NUMEROS!")
    }
    }  
}

function botonG7() {
    if (numbCont == "123456" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "1234567";
        numbCont = "1234567";
    } else {
    if (letraCont == "ABCDEF") {
    letras.innerHTML = "ABCDEFG";
    letraCont = "ABCDEFG";
    } else if (numbCont !== "123456" && letraCont !== "ABCDEFGHIJ") {
        swal("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDEF") {
        swal("¡FALTAN NUMEROS!")
    }
    }
}

function botonH8() {
    if (numbCont == "1234567" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "12345678";
        numbCont = "12345678";
    } else {
    if (letraCont == "ABCDEFG") {
    letras.innerHTML = "ABCDEFGH";
    letraCont = "ABCDEFGH";
    } else if(numbCont !== "1234567" && letraCont !== "ABCDEFGHIJ") {
        swal("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDEFG") {
        swal("¡FALTAN NUMEROS!")
    }
    }
  
}

function botonI9() {
    if (numbCont == "12345678" && letraCont == "ABCDEFGHIJ") {
        numeros.innerHTML = "123456789";
        numbCont = "123456789";
    } else {
    if (letraCont == "ABCDEFGH") {
    letras.innerHTML = "ABCDEFGHI";
    letraCont = "ABCDEFGHI";
    } else if (numbCont !== "12345678" && letraCont !== "ABCDEFGHIJ") {
        swal("¡FALTAN LETRAS!");
    } else if (letraCont !== "ABCDEFGH") {
        swal("¡FALTAN NUMEROS!")
    }
    } 
}

function botonJ0() {
    if (numbCont == "123456789" && letraCont == "ABCDEFGHIJ") {
        numeros. innerHTML = "1234567890";
        numbCont = "1234567890";
    } else {
    if (letraCont == "ABCDEFGHI") {
    letras. innerHTML = "ABCDEFGHIJ"; 
    letraCont = "ABCDEFGHIJ";
    } else if (numbCont !== "123456789" && letraCont !== "ABCDEFGHIJ") {
        swal("¡FALTAN LETRAS!")
    } else if (letraCont !== "ABCDEFGHI") {
        swal("¡FALTAN NUMEROS!")
    }
    }
    
}

function botonClean() {
    numeros. innerHTML = "";
    numbCont = "";
    letras. innerHTML = ""; 
    letraCont = "";
}



//onclicks

clean. onclick = function() {
    botonClean();
}

a1. onclick = function () {
    botonA1();
}

b2. onclick = function () {
    botonB2();
}

c3. onclick = function () {
    botonC3();
}

d4. onclick = function () {
    botonD4();
}

e5. onclick = function () {
    botonE5();
}

f6. onclick = function () {
    botonF6();
}

g7. onclick = function () {
    botonG7();
}

h8. onclick = function () {
    botonH8();
}

i9. onclick = function () {
    botonI9();
}

j0. onclick = function () {
    botonJ0();
}