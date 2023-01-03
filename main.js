const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const apiURL = `https://api.lyrics.ovh`

// "event.preventDefault previne que o form seja enviado, pois vamos trabalhar com os dados"
form.addEventListener('submit', event => {
    event.preventDefault()
    // função para receber os dados do input
    // o método trim retorna sem os espaços em branco
    const searchTerm = searchInput.value.trim()

if (!searchTerm) {
    songsContainer.innerHTML = `<li class="warning-message">Por favor, digite um termo válido</li>`
    return
}

   fetchsongs   
})