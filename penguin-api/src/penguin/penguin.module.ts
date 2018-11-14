import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PenguinController } from './penguin.controller';
import { PenguinService } from './penguin.service';
import { penguinProviders } from './penguin.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [PenguinController],
    components: [
        PenguinService,
        ...penguinProviders,
    ],
})
export class PenguinModule {}
