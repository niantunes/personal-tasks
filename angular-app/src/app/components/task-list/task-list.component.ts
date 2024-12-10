import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriorityPipe } from '../../shared/pipes/upercase.pipe';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    PriorityPipe
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getAll().subscribe(
      (tasks) => {
        
        if (tasks.length > 0) {
          this.tasks = tasks;
        } else {
          console.error('Não há tarefas cadastradas.');
        }
      },
      (error) => {
        console.error('Erro ao carregar tarefas:', error);
      }
    );
  }

  deleteTask(id: string): void {
    this.taskService.delete(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(task => task.id !== id);
      },
      error: (error) => {
        console.error('Erro ao excluir tarefa:', error);
      }
    });
  }

}
