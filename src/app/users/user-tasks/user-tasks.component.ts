import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  //the userId property must be same as u define in url
  //userId = input.required<string>();

  private userServie = inject(UsersService);
  //Give info about the router that has been actived by angular router
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  userName = '';
  // userName = computed(() => {
  //   return this.userServie.users.find((user) => user.id === this.userId())
  //     ?.name;
  // });
  ngOnInit(): void {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.userServie.users.find((user) => {
            return user.id === paramMap.get('userId');
          })?.name || '';
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
