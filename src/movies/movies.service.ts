import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entities';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    create(movieData) {
        this.movies.push({
          id: this.movies.length + 1,
          ...movieData,
        });
      }
}
