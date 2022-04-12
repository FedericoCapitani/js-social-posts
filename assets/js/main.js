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
/**
 * 
 * @param {object} array di oggeti per creare le card
 */
function createPosts(array){
    array.forEach((element) => {
        let post = document.querySelector('.container')
        let div = document.createElement('div')
        let pfp = document.createElement('div')
        let author = document.createElement('div')
        let post_text = document.createElement('div')
        let post_img = document.createElement('div')
        div.classList.add('card')
        pfp.classList.add('profile_picture')
        pfp.innerHTML = `<img src="${element.foto_autore}" alt="">`
        author.classList.add('autore')
        author.innerHTML = `${element.nome_autore} <br> ${element.data}`
        post_text.innerHTML = `${element.testo_post}`
        post_img.innerHTML =`<img src="${element.immagine}" width="100%">`
        div.append(pfp, author, post_text, post_img)
        post.append(div)
    })
}

const posts = 
[
    {
        id: 1,
        nome_autore: 'Marco Rossi',
        foto_autore: './assets/img/pfp-1.jpg',
        data: '06/23/2021',
        testo_post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum assumenda corrupti facilis sapiente soluta veritatis asperiores itaque, sequi distinctio culpa!',
        immagine: './assets/img/post-img-1.jpg',
        numero_likes: 67
    },
    {
        id: 2,
        nome_autore: 'Laura Pascal',
        foto_autore: './assets/img/pfp-2.jpg',
        data: '08/15/2020',
        testo_post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum assumenda corrupti facilis sapiente soluta veritatis asperiores itaque, sequi distinctio culpa!',
        immagine: './assets/img/post-img-2.jpg',
        numero_likes: 173
    }
]

createPosts(posts);