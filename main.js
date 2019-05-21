// Creare una griglia 6x6, ad ogni click su un riquadro parte una richiesta AJAX
// che prende un numero random da 1 a 9
// (utilizzare l'API https://www.boolean.careers/api/random/int).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.
$(document).ready(function(){

  $('.square').click(function(){

    var elemento = $(this);

    $.ajax({
      url:'https://www.boolean.careers/api/random/int',
      metod: 'GET',
      success: function(res){
        console.log(res);
        elemento.text(res.response);
        if(res.response>5){
          if(elemento.hasClass('giallo')) {
            elemento.removeClass('giallo');
          }
          elemento.addClass('verde');
        }else{
          if(elemento.hasClass('verde')) {
            elemento.removeClass('verde');
          }
          elemento.addClass('giallo');
        }

      },
      error: function(){
        alert('falso');
      }
    })


  })
});
