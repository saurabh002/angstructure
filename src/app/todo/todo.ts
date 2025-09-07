import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'todo',
    templateUrl: 'todo.html',
    imports: [CommonModule]
})
export class ToDo{
    list: todoModel[] = [];
    isStrikethrough: boolean = false;

    SaveTasks(task: string){
        console.log(task);
        const newTask: todoModel = {
            taskname: task,
            iscompleted: false
        }
        this.list.push(newTask);
    } 

    DeleteTask(task: string){
        this.list = this.list.filter(c => c.taskname != task);
    }
    DoneTask(task: todoModel){
        task.iscompleted = true;
        //this.isStrikethrough = true;
    }
}

export interface todoModel{
    taskname: string,
    iscompleted: boolean
}