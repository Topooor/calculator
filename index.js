const dodaj = document.getElementById("plus");
const odejmij = document.getElementById("minus");
const pomnoz = document.getElementById("razy");
const podziel = document.getElementById("podziel");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const rownasie = document.getElementById("result");
const clear = document.getElementById("clear");
const input = document.getElementById("input");
const polerobocze = document.getElementById("polerobocze")
const znak = document.getElementById("znak")

let liczba = document.querySelectorAll('.liczby div')


one.addEventListener("click", function(){
    input.textContent+="1"});
two.addEventListener("click", function(){
    input.textContent+="2"});
three.addEventListener("click", function(){
    input.textContent+="3"});
four.addEventListener("click", function(){
    input.textContent+="4"});
five.addEventListener("click", function(){
    input.textContent+="5"});
six.addEventListener("click", function(){
    input.textContent+="6"});
seven.addEventListener("click", function(){
    input.textContent+="7"});
eight.addEventListener("click", function(){
    input.textContent+="8"});
nine.addEventListener("click", function(){
    input.textContent+="9"});
zero.addEventListener("click", function(){
    input.textContent+="0"});
dot.addEventListener("click", function(){
    input.textContent+="."
});
clear.addEventListener("click", function(){
    input.textContent = null
    polerobocze.textContent = null
    znak.textContent = null
});


//Funkcje znaków działania

dodaj.addEventListener("click", function(){
    let skladnik1 = input.textContent
    input.textContent = ""
    znak.textContent = "+"
    polerobocze.textContent = JSON.parse(skladnik1)
})
odejmij.addEventListener("click", function(){
    let skladnik1 = input.textContent
    input.textContent = ""
    znak.textContent = "-"
    polerobocze.textContent = JSON.parse(skladnik1)
})
pomnoz.addEventListener("click", function(){
    let skladnik1 = input.textContent
    input.textContent = ""
    znak.textContent = "*"
    polerobocze.textContent = JSON.parse(skladnik1)
})
podziel.addEventListener("click", function(){
    let skladnik1 = input.textContent
    input.textContent = ""
    znak.textContent = "/"
    polerobocze.textContent = JSON.parse(skladnik1)
})

//skutek naciśnięcia równania

rownasie.addEventListener("click", function(){
    dzialanie()
}) 

function dzialanie(){
    
    if (znak.textContent.includes("+")){
   input.textContent = JSON.parse(polerobocze.textContent) + JSON.parse(input.textContent)
} else if(znak.textContent.includes("-")){
    input.textContent = JSON.parse(polerobocze.textContent) - JSON.parse(input.textContent)
}else if (znak.textContent.includes("*")){
   input.textContent = JSON.parse(polerobocze.textContent) * JSON.parse(input.textContent)
}
else if(znak.textContent.includes("/")){
    input.textContent = JSON.parse(polerobocze.textContent) / JSON.parse(input.textContent)
}
else
{input.textContent = "DEBIL"}
}





    



