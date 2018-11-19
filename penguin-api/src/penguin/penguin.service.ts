import { Injectable, Inject } from '@nestjs/common';
import { Penguin } from './penguin.interface';
import { PenguinDto } from './penguin.dto';
import { PENGUIN_MODEL_PROVIDER } from '../constants';
import { Model } from 'mongoose';

@Injectable()
export class PenguinService {

    constructor(@Inject(PENGUIN_MODEL_PROVIDER) private readonly penguinModel: Model<Penguin>){}

    async create(penguinDto: PenguinDto): Promise<Penguin> {
        const created  = new this.penguinModel(penguinDto);
        return created.save();
    }

    async findAll(): Promise<Penguin[]> {
        return this.penguinModel.find();
    }

    async delete(id: string): Promise<any> {
        return this.penguinModel.deleteOne({_id: id});
    }

}
