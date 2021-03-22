import { Movie } from '../models/movie.js'

export const postAddMovie = ((req, res) => {
    const movie = new Movie({
        title: req.body.title,
        rank: req.body.rank,
        image: req.body.image,
        id: req.body.id,
        year: req.body.year
    })
    console.log(movie)
    movie.save() 
    res.json(movie)
})

export const movies = async (req, res) => {
    const movies = await Movie.find()
    if (!movies) {
        return res.status(400).json({Message: `No movies found`})
    }
    res.json(movies)
}

export const deleteMovie = async (req, res) => {
    const movieId = req.body.movieId
    try {
        const deletedMovie = await Movie.findByIdAndRemove(movieId)
        if (!deletedMovie) {
            return res.status(400).json({Message: `Movie to delete not found.`})
        }
        console.log(`Deleted the movie: ${deletedMovie}`)
        res.sendStatus(200) 
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }

}