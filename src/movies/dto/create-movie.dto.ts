import { IsString, IsNumber } from 'class-validator';
export class CreateMovieDto {
  @IsString()
  readonly title: string;
}
