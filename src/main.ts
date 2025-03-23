import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      // allow to get value dynamic value from url and assign to input declare in component
      withComponentInputBinding(),
      // this ftn will able the chile component to get input value from parent url
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
    ),
  ],
}).catch((err) => console.error(err));
