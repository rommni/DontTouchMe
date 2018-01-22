//configuration du jeux
let largeur = $(".gameSpace").css("width"); //largeur de la zone de jeux


//Variable globale du jeu
let score=0; // gère le score du jeu
let game=true;
let inGame = []; // Liste des id d'ennemies en jeux
let timer= 0; // gère le timer de jeu
let count = 0; //incremente l'id des ennemies
var initialise=false;

var intervalCreate, intervalMouvement, intervalTimer, gameInterval;

$(document).ready(function(){gameInterval = setInterval(gameController, 50);});

function gameController(){
		if(!game){
			clearInterval(gameInterval);
			return;
		}
		if(!initialise){
			$(".enemy").remove();
			// Initialisation des variables
			inGame = [];
			timer=0;
			count=0;
			
			$("#score").text(score);
		
			// Initialisation des timers
			intervalCreate = setInterval(createBlock,1000);
			intervalMouvement = setInterval(mouvementEnemy,50);
			intervalTimer = setInterval(updateTimer, 1000);
		
			// Création Event Listener
			document.addEventListener("keydown", deplacement, false);
			
			// Initilisation position joueur
			 $(".player").css("left", "145px")
			 
			 initialise = true;
		}
		
		if(timer >= 120000){
			score += 1;
			reset();
			if(confirm("Felicitation vous avez gagné ! Souhaitez-vous rejouer ?")){
				initialise = false;
			}else{
				game=false;
			}
			
		}
		
	
}

function reset(){
			
	clearInterval(intervalCreate);
	clearInterval(intervalMouvement);
	clearInterval(intervalTimer);
			
	document.removeEventListener("keydown", deplacement);
	
}

function updateTimer(){
	timer+=1000;
	if(timer>120000){
		timer=120000;
	}
	$("#time").text(new Date(timer).toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1"));
}

function positionLateraleAleatoire()
{
    return Math.round(Math.round(Math.random() * (largeur.substring(0,largeur.length-2)-30)));
}

function createBlock()
{

  $(".gameSpace").append("<div id=enemy" + count + " class=enemy ></div>");
  $("#enemy"+count).css("left", positionLateraleAleatoire());
  $("#enemy"+count).css("top", 0);
  inGame.push("#enemy"+count);
  count+=1;
}

function deleteBlock(id)
{
	inGame.splice(inGame.indexOf(id),1);
	$(id).remove();
}


function deplacement(event) {
    var x = event.which || event.keyCode; // event.keyCode is used for IE8 and earlier
    if (x == 37) { // fleche gauche
        deplacergauche();
    }
    if (x == 39) { // fleche droite
        deplacerdroite();
    }

}

function deplacergauche()
{
	let leftPosDoc = $(".player").offset().left;
	let leftPos = $(".player").position().left;
	if(leftPos>0)
	{
	  $(".player").offset({left : leftPosDoc-3});
	}


}

function deplacerdroite()
{

	let leftPosDoc = $(".player").offset().left;
	let leftPos = $(".player").position().left;
	if(leftPos<(largeur.substr(0, largeur.length-2)-10))
	{
	  $(".player").offset({left : leftPosDoc+3});
	}

}

function checkColision(id)
{
	let player = $(".player")
	let playerX = player.position().left;
	let playerY = player.position().top
	let enemy = $(inGame[id]);
	let enemyX = enemy.position().left;
	let enemyY = enemy.position().top;
	
	if( enemyY+10>playerY && enemyY<playerY+10){
		if(enemyX+30>playerX && enemyX<playerX+10){
			reset();
			if(confirm("Vous avez perdu ! Souhaitez-vous rejouer ?")){
				initialise = false;
			}else{
				game=false;
			}
		}
	}
	
}



function mouvementEnemy()
{
  for (let id in inGame) {
	let currentHeight = $(".gameSpace").outerHeight();
    if($(inGame[id]).css("top").substring(0,$(inGame[id]).css("top").length-2)<currentHeight-10)
    {
      $(inGame[id]).css("top","+=2%");
	  checkColision(id);
    }
	else {
     deleteBlock(inGame[id]);
	}

  }
}

