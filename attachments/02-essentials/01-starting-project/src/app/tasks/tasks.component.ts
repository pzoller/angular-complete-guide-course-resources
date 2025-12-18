import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task, type TaskInput } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user?.id ?? '');
  }

  onStartNewTask() {
    this.isAddingTask = true;
  }

  onCloseNewTask() {
    this.isAddingTask = false;
  }
}
