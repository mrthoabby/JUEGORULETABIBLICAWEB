//Variables Locales




//Variables localizando elementos
var numberPlayers = document.getElementById('numberPlayers');
const playersSelector = document.getElementById('playersSelector');


//Functions
function AssignNumber(){
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




//Events
numberPlayers.addEventListener('change',AssignNumber);
window.addEventListener('load',AssignNumber);
window.addEventListener('load',createPlayers);