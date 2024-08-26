const posts = [
    {
        userId: 1,
        id: 1,
        title: 'Uno',
        body: 'Uno'
    },
    {
        userId: 2,
        id: 2,
        title: 'Dos',
        body: 'Dos'
    },
    {
        userId: 1,
        id: 3,
        title: 'Tres',
        body: 'Tres'
    },
    {
        userId: 1,
        id: 4,
        title: 'Cuatro',
        body: 'Cuatro'
    }, {
        userId: 3,
        id: 5,
        title: 'Cinco',
        body: 'Cinco'
    },
    {
        userId: 4,
        id: 6,
        title: 'Seis',
        body: 'Seis'
    },
    {
        userId: 4,
        id: 7,
        title: 'Siete',
        body: 'Siete'
    },
    {
        userId: 5,
        id: 8,
        title: 'Ocho',
        body: 'Ocho'
    },
    {
        userId: 5,
        id: 9,
        title: 'Nueve',
        body: 'Nueve'
    },
    {
        userId: 5,
        id: 10,
        title: 'Diez',
        body: 'Diez'
    }
]

const findPostById = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((item) => item.id === id)
            post ? resolve(post) : reject(`No se encontró el post con id: ${id}`)
        }, 2000)
    })
}

const buscar = async () => {
   /*const post1 = await findPostById(3)
   const post2 = await findPostById(3)
   const post3 = await findPostById(3)*/
   const allPost = await Promise.all([findPostById(3),findPostById(1),findPostById(5)])
   console.log('post => ', allPost)
}

buscar()