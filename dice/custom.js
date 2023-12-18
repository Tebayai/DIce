
function lancerDes(){
    var nombreFaces = parseInt(document.getElementById("diceNumber").value);

    //verifie si le nombre entrée est valide
    if (isNaN(nombreFaces) || nombreFaces < 1){
        alert("Please enter a valid number");
        return;
    }
    var resultat = Math.floor(Math.random() * nombreFaces) + 1;
    document.getElementById("resultat").textContent = resultat;
}