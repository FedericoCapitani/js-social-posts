/* Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes. */

/* Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */

/* Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like. */



const posts = 
[
    {
        id: 1,
        nome_autore: 'Marco Rossi',
        foto_autore: '',
        data: '06/23/2021',
        testo_post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum assumenda corrupti facilis sapiente soluta veritatis asperiores itaque, sequi distinctio culpa!',
        immagine: 'https://picsum.photos/200',
        numero_likes: 67
    },
    {
        id: 2,
        nome_autore: 'Laura Pascal',
        foto_autore: '',
        data: '08/15/2020',
        testo_post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum assumenda corrupti facilis sapiente soluta veritatis asperiores itaque, sequi distinctio culpa!',
        immagine: 'https://picsum.photos/200',
        numero_likes: 245
    },
    {
        id: 3,
        nome_autore: 'Sara Violini',
        foto_autore: '',
        data: '02/01/2022',
        testo_post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum assumenda corrupti facilis sapiente soluta veritatis asperiores itaque, sequi distinctio culpa!',
        immagine: 'https://picsum.photos/200',
        numero_likes: 173
    }
]

