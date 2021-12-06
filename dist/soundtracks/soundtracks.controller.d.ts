import { CreateSoundtrackDto } from './dto/create-soundtrack.dto';
export declare class SoundtracksController {
    findAll(): string;
    create(CreateSoundtrackDto: CreateSoundtrackDto): Promise<string>;
}
