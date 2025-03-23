import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes = [
  {
    path: '',
    component: NoTaskComponent, //<your-domain>
  },
  {
    path: 'tasks', // <your-domain>/tasks
    component: TasksComponent,
  },
];
