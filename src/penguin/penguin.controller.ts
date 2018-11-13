import { Controller, Post, Get, HttpCode, Body } from '@nestjs/common';
import { PenguinService } from './penguin.service';
import { PenguinDto } from './penguin.dto';
import { Penguin } from './penguin.interface';

@Controller('penguin')
export class PenguinController {

    constructor(
        private penguinService: PenguinService) {}

    @Post()
    @HttpCode(201)
    async create(@Body() penguinDto: PenguinDto) {
        this.penguinService.create(penguinDto);
    }

    @Get()
    async findAll(): Promise<Penguin[]> {
        return this.penguinService.findAll();
    }

}
