/// Zone de gestion du jeux
function mouvement(id)
{



}



function inGame()
{
  for (let id in ingame) {
    console.log($(ingame[id]).css("top"));
    if($(ingame[id]).css("top")>0)
    {
      $(ingame[id]).css("top","+=-1%");
    }
$(ingame[id]).css("top","+=1px");

//elseif gestion des collisions.

  //  else {
  //    deleteblock(ingame[id]);
  //  }

  }


}
var intervalcreate = setInterval(createblock,1000);
var interval = setInterval(inGame,50);
document.addEventListener("keydown", deplacement, false);
