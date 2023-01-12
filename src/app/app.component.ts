import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';
  count: number = 0;
  childHide: boolean = true;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  toggleChild() {
    this.childHide = !this.childHide;
  }
}
