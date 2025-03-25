import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userId = input.required();
  //order = input<'asc' | 'desc'>();
  order = 'asc' || 'desc';
  private taskService = inject(TasksService);
  private activeRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  userTasks = computed(() => {
    return this.taskService.allTasks().filter((task) => {
      return task.userId === this.userId();
    });
  });

  ngOnInit(): void {
    const subscription = this.activeRoute.queryParams.subscribe({
      next: (param) => (this.order = param['order']),
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
