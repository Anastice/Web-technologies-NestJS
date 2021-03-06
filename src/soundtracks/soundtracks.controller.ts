import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateSoundtrackDto} from './dto/create-soundtrack.dto';
import {  UpdateSoundtrackDto} from './dto/update-soundtrack.dto';

@Controller('soundtracks')
export class SoundtracksController {
   @Get()
   //@Redirect
   findAll(): string {
      return 'This action returns all';
  }

   @Get(':id')
   findOne(@Param('id') id: string): string {
      return `This action returns a #${id} soundtrack`;
  }

   @Post()
   @HttpCode(HttpStatus.CREATED)
   @Header()
   create(@Body() CreateSoundtrackDto: CreateSoundtrackDto): string {
      return `Title : ${CreateSoundtrackDto.title}`;
   }

   @Delete(':id')
   remove(@Param('id') id: string){
      return `Successfully removes a #${id} soundtrack`
   }

   @Put(':id')
   update( @Body() UpdateSoundtrackDto: UpdateSoundtrackDto, @Param('id') id: string) {
      return `Update + #${id}`
   }
}
