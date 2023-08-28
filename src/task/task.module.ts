import { Get, Module } from '@nestjs/common';
import { TaskController } from './task.controller';

@Module({
  controllers: [TaskController]
})
export class TaskModule {
    @Get()
    async getAll() {
      return JSON.stringify({text: "Wow, that's working :)) "})
    }
}
