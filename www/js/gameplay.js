//configuration du jeux

var gametime = 120; //temps de jeux
var largeur = ${'#gameSpace'}.css("width"); //largeur de la zone de jeux


//Variable globale du jeu
let count = 0; //increment l'id des ennemies
let ingame = []; // Liste des id d'ennemies en jeux

function largeuraleatoire()
{
    return Math.round(Math.random() * largeur);
}

function createblock()
{

  ${'#gameSpace'}.append('<div id=B' + count + ' class=enemy ></div>');
  ${'B'+count}.offset({ top: 0, left: largeuraleatoire() });
  ingame.append('B'+count);
}

function deleteblock(id)
{
ingame.splice(ingame.IndexOf(id),1);
${id}.remove();


}
