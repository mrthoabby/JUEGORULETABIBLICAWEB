//Variables Locales
var playersDemos = {1:"MrthoAbby",2:"JugadordePrueba",3:"JugadordePrueba",4:"JugadordePrueba",5:"Demo",6:"JugadordePrueba",7:"JugadordePrueba",8:"JugadordePrueba",9:"JugadordePrueba",10:"JugadordePrueba"};
var quantitysquares = 100;


//Variables localizando elementos
var numberPlayers = document.getElementById('numberPlayers');
const playersSelector = document.getElementById('playersSelector');
var nameplayers = document.getElementById('name-players');
var antionGame = document.getElementById('action-game');

//Functions
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




//Events
numberPlayers.addEventListener('change',assignNumber);
// window.addEventListener('load',assignNumber);
// window.addEventListener('load',createPlayers);
window.addEventListener('load',showPlayers);
window.addEventListener('load',generateSquare);