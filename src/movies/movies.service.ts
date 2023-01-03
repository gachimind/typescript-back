import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entities';

@Injectable()
export class MoviesService {}
