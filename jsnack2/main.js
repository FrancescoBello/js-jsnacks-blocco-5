$(document).ready(function(){


  var nomi = ["Francesco", "Luca", "Giorgio", "Gianluca", "Andrea", "Mario", "Marco", "Angelo", "Piero", "Luigi", "Mattia"];
    console.log(nomi);
   var nomi_scelti = []
    var scelta1 = parseInt(prompt("Inserisci un numero tra 0 e 10"));
    var scelta2 = parseInt(prompt("Inserisci un numero tra 0 e 10"));
    for (var i = scelta1; i <= scelta2; i++) {
        var nome = nomi[i];
        nomi_scelti.push(nome);
        console.log("hai scelto " + " " + nomi_scelti);


    }


}
)
