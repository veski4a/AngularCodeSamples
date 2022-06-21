import { Component, VERSION } from '@angular/core';
import { timer } from 'rxjs';
import { TimersService } from './timers-service/timers.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private timersService: TimersService) {}

  clicked(): void {
    this.timersService.readDatabase();
  }
}
