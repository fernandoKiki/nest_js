import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';
import { TasksService } from '../service/tasks/tasks.service';

@Controller('api/tasks')
export class TasksController {

    constructor(
        private taskService: TasksService
    ){}

@Get()
getAll(){
    return this.taskService.findAll();
}

@Get(':id')
getOne(@Param('id') id: number){
    return this.taskService.findOne(id);
}

@Post()
create (@Body() body: any) {
    return this.taskService.create(body);
}

@Put(':id')
update(@Param('id') id: number , @Body() body: any){
return this.taskService.update(id, body);
}

@Delete(':id')
delete(@Param('id') id: number){
    return this.taskService.delete(id);
}

}
