import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundtracksController } from './soundtracks/soundtracks.controller';

@Module({
  imports: [],
  controllers: [AppController, SoundtracksController],
  providers: [AppService],
})
export class AppModule {}
