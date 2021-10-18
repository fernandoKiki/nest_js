import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { task } from 'entities/task.entity';
import { TasksService } from './service/tasks/tasks.service';
import { TasksController } from './controller/tasks.controller';

@Module({
  imports: [
  TypeOrmModule.forFeature([task])
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
