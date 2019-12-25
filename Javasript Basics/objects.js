var movies = [
    {
        name: "Koi Mil Gaya",
        rating: 3.5,
        hasWatched: true
    },
    {
        name: "Frozen",
        rating: 5,
        hasWatched: false
    }
]

movies.forEach(movie => {
    console.log(`You have ${ movie.hasWatched ? "watched " : "not seen " } "${movie.name}" - Rating ${movie.rating} stars`)
})