import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entities';

@Injectable()
export class MoviesService {

  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

}
