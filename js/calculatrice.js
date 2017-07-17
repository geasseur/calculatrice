var chiffre1 = 0;
var nombre1;
var nombre2;
var chiffre2 = 0;
var signe = "";
var resultat = 0;
var dernierResultat = 0;

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
  if (signe == "" && resultat == 0){
    chiffre1 += chiffreRecupere;
    nombre1 = parseInt(chiffre1);
    console.log("nombre1 : " + nombre1);
    affichage.value = nombre1;
  }

  else if(signe != "" && resultat == 0){
    chiffre2 += chiffreRecupere;
    nombre2 = parseInt(chiffre2);
    affichage.value = nombre2;
    console.log("nombre2 : " + nombre2);
  }

  else if (resultat != 0) {
    if(chiffre1 == 0){
      chiffre2 += chiffreRecupere;
      nombre2 = parseInt(chiffre2);
      console.log("nouvelle nombre2 : " + nombre2);
      affichage.value = nombre2;
    }
  }

}

function recommencer(){
  dernierResultat = 0;
  resultat = 0;
  chiffre1 = 0;
  chiffre2 = 0;
  nombre1 = 0;
  nombre2 = 0;
  signe = "";
  affichage.value = "";
}

//Recupéré le signe de l'opération
function ajouterSigne(signeRecupere){
  signe = signeRecupere;
  console.log(signe);
}

function effacer(){
  if (dernierResultat != 0 && chiffre2 !=0) {
    chiffre2 -= chiffre2;
  }
  else if(dernierResultat != 0){
    signe -= signe;
    console.log(signe);
  }
  else if (chiffre1 != 0 && signe =="") {
    chiffre1 -= chiffre1;
    console.log(chiffre1);
  }
  else if (chiffre1 != 0 && signe != "" && chiffre2 ==0) {
    signe -= signe;
    console.log(signe);
  }
  else if (signe != "" && chiffre2 != 0 && dernierResultat == 0) {
    chiffre2 -= chiffre2;
    console.log("effacement: "+chiffre2);
  }
}

function calcul(){
  if (dernierResultat != 0) {
    if (signe == "+") {
      resultat = dernierResultat + nombre2;
    }
    else if (signe == "-") {
      resultat = dernierResultat - nombre2;
    }
    else if (signe == "*") {
      resultat = dernierResultat * nombre2;
    }
    else if (signe == "/") {
      resultat = dernierResultat / nombre2;
    }
    affichage.value = resultat;
    chiffre1 = 0;
    chiffre2 = 0
    console.log("ceci est le deuxième resultat: "+resultat);
    dernierResultat = resultat;
  }
  else if(chiffre1 != "" && chiffre2 != "" && signe != "" && dernierResultat == 0){
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
    dernierResultat = resultat;
    chiffre1 = 0;
    chiffre2 = 0
    console.log("ceci est le premier resultat: "+resultat);
  }

  else{
    alert("vous n'avez pas bien rentrez vos nombres ou l'opération souhaitez")
  }
}
