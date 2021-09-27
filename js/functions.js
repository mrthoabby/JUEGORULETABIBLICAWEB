//Variables localizando elementos
var numberPlayers = document.getElementById('numberPlayers');
const playersSelector = document.getElementById('playersSelector');
var nameplayers = document.getElementById('name-players');
var antionGame = document.getElementById('action-game');
var letterStore = document.getElementById('letter-store');
var vocalStore = document.getElementById('vocal-store');
var ruleta = document.getElementById('idruleta');
var contentIteraction = document.getElementById('conten-interaction');
var buttonRuleta = document.getElementById('btnGiro');




//Variables Locales
var buttonsDemos = {"btnGiro":"Girar la ruleta","btnResult":"Solucionar  Panel"};
var playersDemos = {1:"MrthoAbby",2:"JugadordePrueba",3:"JugadordePrueba",4:"JugadordePrueba",5:"Demo",6:"JugadordePrueba",7:"JugadordePrueba",8:"JugadordePrueba",9:"JugadordePrueba",10:"JugadordePrueba"};
var context = ruleta.getContext("2d");
var center = ruleta.width/2;
var quantitysquares = 100;
const listvocals = [65,69,73,79,85];
const valoresDemos = [
10000,
30000,
"Donarlo todo.",
100000,
50000,
30000,
10000,
80000,
25000,
30000,
-50000,
100000,
10000,
30000,
25000,
"Donarlo todo.",
-1500,
30000,
85000,
3000,
75000,
30000,
10000,
25000,
"Pierde el turno",
-30000
]
var anguleBySectionRuleta = 360/valoresDemos.length;




//Functions
// Public funtions
function createRuleta(){
    context.beginPath();
    context.moveTo(center,center);
    context.arc(center,center,center-15,0,2*Math.PI);
    context.lineTo(center,center);
    context.fillStyle= "#59ADFF";
    context.fill();
    let color = "#33f38f";
    for (let index = 0; index < valoresDemos.length; index++) {
        context.beginPath();
        context.moveTo(center,center);
        context.arc(center,center,center-20,index*2*Math.PI/valoresDemos.length,(index+1)*2*Math.PI/valoresDemos.length);
        context.lineTo(center,center);
        if(valoresDemos[index] < 0){
            color = "#E54040";
        }
        else if(valoresDemos[index] === 30000){
            color = "#E2C049";
        }
        else if(valoresDemos[index] === 100000){
            color = "#B5E742";
        }
        else if(valoresDemos[index] === 10000){
            color = "#59ADFF";
        }
        else if(valoresDemos[index] === "Donarlo todo."){
            color = "#000000";
        }
        else if(valoresDemos[index] === 25000){
            color = "#B032E7";
        }
        else if(valoresDemos[index] === "Pierde el turno"){
            color = "#FFFFFF";
        }
        else if(valoresDemos[index] <= 10000){
            color = "#254B2F";
        }
        else if(valoresDemos[index] > 50000){
            color = "#005BEA";
        }
        context.fillStyle=color;
        color = "#33f38f"
        context.fill();
        

        context.save();
        context.translate(center, center);
        context.rotate(3*2*Math.PI/(5*valoresDemos.length)+index*2*Math.PI/valoresDemos.length);
        context.translate(-center,-center);
        context.font='18px sans-serif';
        context.textAlign='right';
        context.fillStyle="white";
        if(valoresDemos[index] === "Pierde el turno"){
            context.fillStyle="#000000";
        }
        context.fillText(valoresDemos[index].toLocaleString(),ruleta.width-30,center);
        context.restore();
    }
}

function assignNumber(){
    document.getElementById('number-players').innerHTML = numberPlayers.value;
}
function createPlayers(){
    let valueNumberPlayers = numberPlayers.value;
    for (let index = 0; index < valueNumberPlayers; index++) {
        let numeroplayer = (index+1);
        let inputPlayer = document.createElement('INPUT');
        inputPlayer.setAttribute('type','text');
        inputPlayer.setAttribute('class','inputPlayer');
        inputPlayer.setAttribute('minlength','5');
        inputPlayer.setAttribute('maxlength','10');
        inputPlayer.setAttribute('placeholder','Nombre del Jugador número:  '+numeroplayer)
        inputPlayer.setAttribute('id','player'+numeroplayer);
        playersSelector.appendChild(inputPlayer);
    }
    let butonPlay = document.createElement('INPUT');
        butonPlay.setAttribute('type','button');
        butonPlay.setAttribute('class','menu-options');
        butonPlay.setAttribute('value','Iniciar a Jugar');
        butonPlay.setAttribute('id','butonPlay');
        playersSelector.appendChild(butonPlay);
}
function showPlayers(){
    let titleCurrentplayers = document.createElement('H4');
        titleCurrentplayers.setAttribute('class','title-players');
        titleCurrentplayers.textContent = "Jugadores"
        nameplayers.appendChild(titleCurrentplayers);
    for (let player in playersDemos) {
        let currentPlayer = document.createElement("ARTICLE");
        let nameplayer = playersDemos[player];
        currentPlayer.setAttribute('id','p'+player);
        currentPlayer.setAttribute('class','player');
        currentPlayer.innerHTML = `<strong class="namep">${playersDemos[player]}</strong><p class="infop">Dinero acumulado: $0</p> <span class="numberp">${player}</span>`;
        nameplayers.appendChild(currentPlayer);
    }
              
}

function generateSquare(){
    for (let index = 0; index < quantitysquares; index++) {
        let square = document.createElement("DIV");
        square.setAttribute('id','S'+index);
        square.setAttribute('class','square');
        antionGame.appendChild(square);
        
    }

}

function storeGenerator(){
    for (let char = 65; char <= 90; char++) {
        if(listvocals.includes(char))
        {
            let vocals = document.createElement("DIV");
            let vocal = String.fromCharCode(char);
            vocals.setAttribute('id',vocal);
            vocals.setAttribute('class','square letter-square');
            vocals.textContent = vocal;
            vocalStore.appendChild(vocals);
        }
        else
        {
            if(char == 80){
                let consonant = document.createElement("DIV");
                consonant.setAttribute('id',"Ñ");
                consonant.setAttribute('class','square letter-square');
                consonant.textContent = "Ñ";
                letterStore.appendChild(consonant);   
            }
            let consonant = document.createElement("DIV");
            let letter = String.fromCharCode(char);
            consonant.setAttribute('id',letter);
            consonant.setAttribute('class','square letter-square');
            consonant.textContent = letter;
            letterStore.appendChild(consonant);
        }
    }
}

     
function gireToRuleta(){
   
     var date = new Date(). getTime();
     var dateMore = date +5000;
     var aleatory = getRandomArbitrary(1, 13);

     var inicio = 0;
     var frequency = getRandomArbitrary(1, 5);
     var id = setInterval(frame,frequency);
     function frame(){
         var increment = aleatory;
         if(new Date(). getTime() > dateMore){
             clearInterval(id);
         }
         else{
             inicio += increment;
             if(increment > 5){
                 increment--;
             }
             if(inicio >= 360){
                 inicio = 0;
             }






             


             ruleta.style.transform = `rotate(${inicio}deg)`;
         }
     }
    
     if(inicio >= 1 || inicio < 7){
        console.log(3000);
    }
    else if(inicio >= 7 || inicio < 7+anguleBySectionRuleta){
        console.log(85.000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*2){
        console.log(30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*3){
        console.log(-1500);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*4){
        console.log("Donar");
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*5){
        console.log(25000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*6){
        console.log(30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*7){
        console.log(10000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*8){
        console.log(100000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*10){
        console.log(-50000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*11){
        console.log(30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*12){
        console.log(25000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*13){
        console.log(80000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*14){
        console.log(10000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*15){
        console.log(30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*16){
        console.log(50000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*17){
        console.log(100000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*18){
        console.log("Donar");
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*19){
        console.log(30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*20){
        console.log(10000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*21){
        console.log(-30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*22){
        console.log("Pierde");
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*23){
        console.log(25000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*24){
        console.log(10000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*25){
        console.log(30000);
    }
    else if(inicio >= 7+anguleBySectionRuleta || inicio < 7+anguleBySectionRuleta*26){
        console.log(75000);
    }

    // ruleta.style.transform = `rotate(${7+anguleBySectionRuleta*2}deg)`;

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function startGame(){
    showPlayers();
    generateSquare();
    storeGenerator();
    createRuleta();
    
}

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}


//Events
numberPlayers.addEventListener('change',assignNumber);
// window.addEventListener('load',assignNumber);
// window.addEventListener('load',createPlayers);
window.addEventListener('load',startGame);
buttonRuleta.addEventListener('click',gireToRuleta)