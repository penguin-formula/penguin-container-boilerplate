import { Controller, Post, Get, Delete, HttpCode, Body, Param } from '@nestjs/common';
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

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.penguinService.delete(id);
    }

}
