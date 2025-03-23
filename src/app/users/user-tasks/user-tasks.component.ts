import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  //the userId property must be same as u define in url
  userId = input.required<string>();

  private userServie = inject(UsersService);
  userName = computed(() => {
    return this.userServie.users.find((user) => user.id === this.userId())
      ?.name;
  });
}
