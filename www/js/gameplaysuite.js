
function checkColision(id)
{
	let player = $(".player")
	let playerX = player.position().left;
	let playerY = player.position().top
	let enemy = $(ingame[id]);
	let enemyX = enemy.position().left;
	let enemyY = enemy.position().top;
	
	if( enemyY>playerY-10 && enemyY<playerY){
		if(enemyX>playerX && enemyX<playerX+10){
			alert("perdu");
		}
	}
}



function inGame()
{
  for (let id in ingame) {
	let currentHeight = $(".gameSpace").outerHeight();
    if($(ingame[id]).css("top").substring(0,$(ingame[id]).css("top").length-2)<currentHeight-10)
    {
      $(ingame[id]).css("top","+=1%");
	  checkColision(id);
    }
	else {
     deleteblock(ingame[id]);
	}

  }


}
var intervalcreate = setInterval(createblock,3000);
var interval = setInterval(inGame,50);
document.addEventListener("keydown", deplacement, false);
