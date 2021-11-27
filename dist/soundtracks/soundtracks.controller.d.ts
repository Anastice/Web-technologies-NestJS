import { CreateSoundtrackDto, UpdateSoundtrackDto, ListAllEntities } from './dto';
export declare class SoundtracksController {
    create(createSoundtrackDto: CreateSoundtrackDto): string;
    findAll(query: ListAllEntities): string;
    findOne(id: string): string;
    update(id: string, updateSoundtrackDto: UpdateSoundtrackDto): string;
    remove(id: string): string;
}
