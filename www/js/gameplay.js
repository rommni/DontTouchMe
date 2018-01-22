//configuration du jeux

let gametime = 120; //temps de jeux
let largeur = $("#gameSpace").css("width"); //largeur de la zone de jeux


//Variable globale du jeu
let count = 0; //increment l'id des ennemies
let ingame = []; // Liste des id d'ennemies en jeux


function positionLaterAlealeatoire()
{
    return Math.round(Math.random() * largeur);
}

function createblock()
{

  $("#gameSpace").append("<div id=B" + count + " class=enemy ></div>");
  $("enemy"+count).offset({ top: 0, left: positionLaterAlealeatoire() });
  ingame.append("enemy"+count);
}

function deleteblock(id)
{
ingame.splice(ingame.IndexOf(id),1);
$(id).remove();

}

function deplacergauche()
{

if($("player").css("left")>0)
{
  $("player").css("left","-=1px");
}

}

function deplacerdroite()
{

if($("player").css("left")< largeur )
{
  $("player").css("left","+=1px");
}

}

function deplacement(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 27) {  // 27 is the ESC key
        deplacergauche();
    }
    if (x == 39) {  // 27 is the ESC key
        deplacerdroite();
    }
}

/// Zone de gestion du jeux
function inGame()
{



}

var interval = setInterval(inGame(),50);
document.addEventListener("keydown", deplacement, false);
