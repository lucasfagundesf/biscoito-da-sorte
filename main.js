// Criando um número aleatorio
const RandomNumber = Math.round(Math.random() * 10)

// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnAgain = document.querySelector("#btnAgain")
const clickImg = document.querySelector("#cookieClose")

// Eventos
btnAgain.addEventListener('click', handleClick)
document.addEventListener('keydown', keyDown)
clickImg.addEventListener('click', handleClick)

// Funçoes
function handleClick(){
    toggleScreen()
    switch (RandomNumber){
        case 1: document.querySelector("#luck").innerHTML = "A vida trará coisas boas se tiver paciência.";
                break;
        case 2: document.querySelector("#luck").innerHTML = "Não compense na ira o que lhe falta na razão.";
                break;
        case 3: document.querySelector("#luck").innerHTML = "Defeitos e virtudes são apenas dois lados da mesma moeda.";
                break;
        case 4: document.querySelector("#luck").innerHTML = "Não há que ser forte. Há que ser flexível.";
                break;
        case 5: document.querySelector("#luck").innerHTML = "Siga os bons e aprenda com eles.";
                break;
        case 6: document.querySelector("#luck").innerHTML = "O riso é a menor distância entre duas pessoas.";
                break;
        case 7: document.querySelector("#luck").innerHTML = "Os defeitos são mais fortes quando o amor é fraco.";
                break;
        case 8: document.querySelector("#luck").innerHTML = "A sorte favorece a mente bem preparada.";
                break;
        case 9: document.querySelector("#luck").innerHTML = "Você é do tamanho do seu sonho.";
                break;
        case 10: document.querySelector("#luck").innerHTML = "A maior barreira para o sucesso é o medo do fracasso.";
                break;
    }
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keyDown(e){
    if(e.key == 'Enter'
    ){
        handleClick()
    }
}