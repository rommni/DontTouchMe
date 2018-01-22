//configuration du jeux

let gametime = 120; //temps de jeux
let largeur = $(".gameSpace").css("width"); //largeur de la zone de jeux


//Variable globale du jeu
let count = 0; //increment l'id des ennemies
let ingame = []; // Liste des id d'ennemies en jeux


function positionLaterAlealeatoire()
{
    return Math.round(Math.random() * largeur);
}

function createblock()
{

  $(".gameSpace").append("<div id=B" + count + " class=enemy ></div>");
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
	let leftPos = $(".player").offset().left;
	console.log(leftPos);
	if(leftPos>0)
	{
	  $(".player").offset({left : leftPos-1});
	}
	

}

function deplacerdroite()
{

	let leftPos = $(".player").offset().left;
	console.log(leftPos);
	if(leftPos<largeur.substr(0, largeur.length-2))
	{
	  $(".player").offset({left : leftPos+1});
	}

}

function deplacement(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 37) {  
        deplacergauche();
    }
    if (x == 39) {  
        deplacerdroite();
    }
	
}

/// Zone de gestion du jeux
function inGame()
{



}

var interval = setInterval(inGame(),50);
document.addEventListener("keydown", deplacement, false);
