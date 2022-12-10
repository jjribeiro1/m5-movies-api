import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { handleException } from 'src/exceptions/handleException';
import { MovieEntity } from './entities/movie.entity';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() dto: CreateMovieDto): Promise<MovieEntity> {
    try {
      return await this.movieService.create(dto);
    } catch (error) {
      handleException(error);
    }
  }

  @Get()
  async findAll(): Promise<MovieEntity[]> {
    try {
      return await this.movieService.findAll();
    } catch (error) {
      handleException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MovieEntity> {
    try {
      return await this.movieService.findOne(id);
    } catch (error) {
      handleException(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateMovieDto,
  ): Promise<MovieEntity> {
    try {
      return await this.movieService.update(id, dto);
    } catch (error) {
      handleException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      return await this.movieService.remove(id);
    } catch (error) {
      handleException(error);
    }
  }
}