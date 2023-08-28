import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTaskDto } from './dtos/createTask.dto';

@Controller('task')
export class TaskController {
    
    @Post()
    async createTask(@Body() createTask: CreateTaskDto) {
        return createTask;
    }
}