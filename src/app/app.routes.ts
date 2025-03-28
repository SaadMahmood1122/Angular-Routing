import { NotFoundComponent } from './not-found/not-found.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes = [
  {
    path: '',
    component: NoTaskComponent, //<your-domain>
    title: 'No Task selected',
  },
  {
    path: 'users/:userId', //<your-domain>/users/<uid>
    component: UserTasksComponent,
    children: [
      {
        // will append the parent route
        path: 'tasks', //<your-domain>/users/<uid>/tasks
        component: TasksComponent,
        title: 'User Tasks',
      },
      {
        path: 'tasks/new', //<your-domain>/users/<uid>/tasks/new
        component: NewTaskComponent,
        title: 'Add Task',
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Error Page',
  },
];
