import { CreateSoundtrackDto } from './dto/create-soundtrack.dto';
import { UpdateSoundtrackDto } from './dto/update-soundtrack.dto';
export declare class SoundtracksController {
    findAll(): string;
    findOne(id: string): string;
    create(CreateSoundtrackDto: CreateSoundtrackDto): string;
    remove(id: string): string;
    update(UpdateSoundtrackDto: UpdateSoundtrackDto, id: string): string;
}
