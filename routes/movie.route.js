import { Router } from 'express'

export const movieRouter = Router()

import { postAddMovie, deleteMovie, movies, updateMovie } from '../controllers/movie.controller.js'

movieRouter.post('/', postAddMovie)

movieRouter.get('/', movies)

movieRouter.delete('/delete', deleteMovie)

movieRouter.put('/update', updateMovie)