import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entities';
import { MoviesService } from './movies.service';

@Controller('api')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
}
