import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateSoundtrackDto, UpdateSoundtrackDto, ListAllEntities } from './dto';

@Controller('soundtracks')
export class SoundtracksController {
   @Post()
   create(@Body() createSoundtrackDto: CreateSoundtrackDto) {
      return 'This action adds a new soundtrack'
   }
   @Get()
   findAll(@Query() query: ListAllEntities) {
   return `This action returns all soundtracks (limit: ${query.limit} items)`;
   }

   @Get(':id')
   findOne(@Param('id') id: string) {
   return `This action returns a #${id} soundtrack`;
   }

   @Put(':id')
   update(@Param('id') id: string, @Body() updateSoundtrackDto: UpdateSoundtrackDto) {
   return `This action updates a #${id} soundtrack`;
   }

   @Delete(':id')
   remove(@Param('id') id: string) {
   return `This action removes a #${id} soundtrack`;
   }
}
