import { Module } from '@nestjs/common';
import { PenguinModule } from './penguin/penguin.module';

@Module({
  imports: [PenguinModule],
})
export class AppModule {}
