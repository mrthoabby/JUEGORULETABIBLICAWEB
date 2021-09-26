//Variables

var numberPlayers = document.getElementById('numberPlayers');



//Functions
function AssignNumber(){
    document.getElementById('number-players').innerHTML = numberPlayers.value;
}





//Events
numberPlayers.addEventListener('change',AssignNumber);
window.addEventListener('load',AssignNumber);