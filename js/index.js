const cards = document.querySelector('#card-poke')
const templateCard = document.querySelector('#template-card').content
let prev, next

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

document.addEventListener('click', (e) => {
    
    if(e.target.matches(".siguiente")){
        fetchData(next)
    }

    if(e.target.matches(".anterior")){
        fetchData(prev)
    }
})

const fetchData = async (url) => {
    try {
        loadingData(true)
        const link = url ? url : 'https://rickandmortyapi.com/api/character'
        const res = await fetch(link)
        const personajes = await res.json()
        next = personajes.info.next
        prev = personajes.info.prev
        pintarCards(personajes.results)
        //console.log('personajes =>', personajes,next,prev)
    } catch (error) {
        console.error('error => ', error)
    } finally {
        loadingData(false)
    }
}

const pintarCards = (characters) => {
    const fragment = document.createDocumentFragment()
    cards.textContent = ''
    characters.forEach((item) => {
        const clone = templateCard.cloneNode(true)
        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute('src', item.image)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const loadingData = (estado) => {
    const loading = document.querySelector('#loading')
    if(estado){
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
    }
}