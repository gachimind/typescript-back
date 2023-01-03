import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entities';
import { MoviesService } from './movies.service';

@Controller('api')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll() {
    return 'all movies';
  }
}
