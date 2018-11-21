import { Module } from '@nestjs/common';
import { PenguinModule } from './penguin/penguin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PenguinModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
