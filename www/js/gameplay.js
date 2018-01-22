//configuration du jeux

let gametime = 120; //temps de jeux
let largeur = $('#gameSpace').css("width"); //largeur de la zone de jeux


//Variable globale du jeu
let count = 0; //increment l'id des ennemies
let ingame = []; // Liste des id d'ennemies en jeux

function positionLaterAlealeatoire()
{
    return Math.round(Math.random() * largeur);
}

function createblock()
{

  $('#gameSpace').append('<div id=B' + count + ' class=enemy ></div>');
  $('enemy'+count).offset({ top: 0, left: positionLaterAlealeatoire() });
  ingame.append('enemy'+count);
}

function deleteblock(id)
{
ingame.splice(ingame.IndexOf(id),1);
$(id).remove();

}
