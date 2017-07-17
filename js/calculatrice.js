var chiffre1 = 0;
var chiffre2 = 0;
var signe;

var affichage = document.getElementById("affichage");
var recuperationChiffre = document.getElementsByClassName("chiffre");
for (var i = 0; i < recuperationChiffre.length; i++) {
  recuperationChiffre[i].addEventListener("click", function(){
    ajouterChiffre(this);
  });
}

function ajouterChiffre(chiffreRecupere){
  console.log(chiffreRecupere);
  if (chiffre1 == 0) {
    chiffre1 = chiffreRecupere.class[i];
    affichage.innerHTML = chiffre1;
  }
  else{
    chiffre2 = chiffreRecupere;
    affichage.innerHTML = chiffre2;
  }

}
