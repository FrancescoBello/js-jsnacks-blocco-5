$(document).ready(function() {



  var biciclette = [
    {
       'nome' : 'Atala',
       'peso' : 6,
    },
    {
       'nome' : 'Bianchi',
       'peso' : 9,
    },
    {
       'nome' : 'Bottecchia',
       'peso' : 7,
    },
    {
       'nome' : 'Carrera',
       'peso' : 10,
    },
  ];
//  var kg = [
  //  {
    //   'peso' : 6,
    //},
    //{
      // 'peso' : 9,
    //},
    //{
      // 'peso' : 7,
  //  },
    //{
      // 'peso' : 10,
    //},
  //];

  //for (var key in biciclette) {
    //console.log(key);
  //  console.log(biciclette);
   //}
   for (var i = 0; i < biciclette.length; i++) {
        var bici = biciclette[i];
        // stampo il nome e il peso
      //  console.log('nome bici : ' + bici.nome  );
        //console.log('peso in kg : ' + bici.peso);
      //  var bici_leggera = Math.min(bici.peso)
        //console.log(bici_leggera);
        var peso_minimo = Math.min(bici.peso)
         console.log(peso_minimo)

    }

});
