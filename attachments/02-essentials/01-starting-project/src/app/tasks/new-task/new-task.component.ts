import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskInput } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<TaskInput>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private taskService = inject(TaskService);

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.taskService.createTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      },
      this.userId
    );

  }
}
