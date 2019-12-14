$(document).ready(function(){

    var template_card = $('#template-card').html();
    var card_function = Handlebars.compile(template_card);




    $.ajax({

        'url': "https://flynn.boolean.careers/exercises/api/array/music",
        'methods':'get',
        'success': function(data){

            for (var i = 0; i < data.response.length; i++) {
                var oggetto = data.response[i];
                var elementi_cards = {

                    copertina:oggetto.poster,
                    titolo : oggetto.title,
                    autore: oggetto.author,
                    anno : oggetto.year

                };

                $('.container').append(card_function(elementi_cards));
            };



        },


        'error': function(){
            alert('errore')
        }




    });







});
