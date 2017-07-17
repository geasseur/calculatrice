var chiffre1 = 0;
var nombre1;
var nombre2;
var chiffre2 = 0;
var signe = "";
var resultat;

var affichage = document.getElementById("affichage");
var recuperationChiffre = document.getElementsByClassName("chiffre");
var recuperationSigne = document.getElementsByClassName("signe");
for (var i = 0; i < recuperationChiffre.length; i++) {
  recuperationChiffre[i].addEventListener("click", function(){
    ajouterChiffre(this.textContent);
  });
}

for (var i = 0; i < recuperationSigne.length; i++) {
  recuperationSigne[i].addEventListener("click", function(){
    ajouterSigne(this.textContent);
    });
}

function ajouterChiffre(chiffreRecupere){
  if (signe == ""){
    chiffre1 += chiffreRecupere;
    nombre1 = parseInt(chiffre1);
    console.log("valeur1 : " + nombre1);
    affichage.value = nombre1;
  }

  else{
    chiffre2 += chiffreRecupere;
    nombre2 = parseInt(chiffre2);
    affichage.value = nombre2;
    console.log("valeur2 : " + nombre2);
  }
}

function ajouterSigne(signeRecupere){
  signe = signeRecupere;
  console.log(signe);
}

function calcul(){
  if(chiffre1 != "" && chiffre2 != "" && signe != ""){
    if (signe == "+") {
      resultat = nombre1 + nombre2;
    }
    else if (signe == "-") {
      resultat = nombre1 - nombre2;
    }
    else if (signe == "*") {
      resultat = nombre1 * nombre2;
    }
    else if (signe == "/") {
      resultat = nombre1 / nombre2;
    }
    affichage.value = resultat;
    console.log(resultat);
  }
  else{
    alert("vous n'avez pas bien rentrez vos nombres ou l'opération souhaitez")
  }
}
