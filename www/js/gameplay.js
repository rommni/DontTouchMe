//configuration du jeux

let gametime = 120; //temps de jeux
let largeur = $(".gameSpace").css("width"); //largeur de la zone de jeux


//Variable globale du jeu
let count = 0; //increment l'id des ennemies
let ingame = []; // Liste des id d'ennemies en jeux

let timer= 0;

let intervalTimer = setInterval(function(){
									timer+=1000;
									$("#time").text(new Date(timer).toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1"));
									console.log(timer);
									}, 1000);

function positionLaterAlealeatoire()
{
    return Math.round(Math.random() * largeur);
}

function createblock()
{

  $(".gameSpace").append("<div id=B" + count + " class=enemy ></div>");
  $("enemy"+count).position({ top: 0, left: positionLaterAlealeatoire() });
  ingame.push("enemy"+count);
}

function deleteblock(id)
{
ingame.splice(ingame.IndexOf(id),1);
$(id).remove();

}

function deplacergauche()
{
	let leftPosDoc = $(".player").offset().left;
	let leftPos = $(".player").position().left;
	console.log(leftPos);
	if(leftPos>0)
	{
	  $(".player").offset({left : leftPosDoc-3});
	}


}

function deplacerdroite()
{

	let leftPosDoc = $(".player").offset().left;
	let leftPos = $(".player").position().left;
	console.log(leftPos);
	if(leftPos<(largeur.substr(0, largeur.length-2)-10))
	{
	  $(".player").offset({left : leftPosDoc+3});
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
