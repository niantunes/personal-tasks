import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['baixa', Validators.required],
      status: ['pendente', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;
      
      this.taskService.create(task).subscribe({
        next: (createdTask) => {
          console.log('Tarefa criada:', createdTask);
          this.taskForm.reset();
        },
        error: (error) => {
          console.error('Erro ao criar tarefa:', error);
        }
      });
    }
  }
}
