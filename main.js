// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

//inizializzazione vue 
var app = new Vue(
    {
        el:'#root',
        data:{
          message: '',
          titolo: ' Hello Vue',
          nome:'',
          cognome:'',
          link:'https://picsum.photos/200/300'

        }
    }
);
